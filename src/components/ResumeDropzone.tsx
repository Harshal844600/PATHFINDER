"use client";

import * as React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  X,
  Loader2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ResumeDropzoneProps {
  onTextExtracted: (text: string) => void;
  /** Optional: called when user clears the uploaded file */
  onClear?: () => void;
  disabled?: boolean;
}

type Tab = "upload" | "paste";

type FileState =
  | { status: "idle" }
  | { status: "extracting"; name: string }
  | { status: "done"; name: string; size: string; preview: string }
  | { status: "error"; name: string; message: string };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const ACCEPTED = [
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXT = [".pdf", ".txt", ".doc", ".docx"];

function isAccepted(file: File): boolean {
  return (
    ACCEPTED.includes(file.type) ||
    ACCEPTED_EXT.some((ext) => file.name.toLowerCase().endsWith(ext))
  );
}

// ─── PDF extraction using pdfjs-dist ─────────────────────────────────────────

async function extractPdfText(file: File): Promise<string> {
  // Dynamically import to keep bundle lean
  const pdfjsLib = await import("pdfjs-dist");

  // Point the worker to the CDN build that matches the installed version
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  const pages: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item: any) => ("str" in item ? item.str : ""))
      .join(" ");
    pages.push(pageText);
  }

  return pages.join("\n\n").replace(/\s{3,}/g, "  ").trim();
}

async function extractTxtText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsText(file);
  });
}

async function extractText(file: File): Promise<string> {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) return extractPdfText(file);
  if (name.endsWith(".txt")) return extractTxtText(file);
  // For .doc/.docx — read as text (basic extraction, works for plain-text exports)
  return extractTxtText(file);
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ResumeDropzone({
  onTextExtracted,
  onClear,
  disabled = false,
}: ResumeDropzoneProps) {
  const [activeTab, setActiveTab] = useState<Tab>("upload");
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileState, setFileState] = useState<FileState>({ status: "idle" });
  const [pasteText, setPasteText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0); // avoids flicker from child element drag events

  // ── Core processing ───────────────────────────────────────────────────────

  async function processFile(file: File) {
    if (!isAccepted(file)) {
      setFileState({
        status: "error",
        name: file.name,
        message: `Unsupported file type. Please upload a PDF, TXT, DOC, or DOCX file.`,
      });
      return;
    }

    setFileState({ status: "extracting", name: file.name });

    try {
      const text = await extractText(file);

      if (!text || text.trim().length < 30) {
        setFileState({
          status: "error",
          name: file.name,
          message:
            "Could not extract enough text from this file. It may be a scanned image PDF. Please paste the text manually.",
        });
        return;
      }

      const preview = text.slice(0, 300) + (text.length > 300 ? "…" : "");

      setFileState({
        status: "done",
        name: file.name,
        size: formatBytes(file.size),
        preview,
      });

      onTextExtracted(text);
    } catch (err: any) {
      setFileState({
        status: "error",
        name: file.name,
        message: err?.message || "Failed to read file. Please try again.",
      });
    }
  }

  // ── Drag handlers ─────────────────────────────────────────────────────────

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounterRef.current++;
      if (!disabled) setIsDragOver(true);
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) setIsDragOver(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      dragCounterRef.current = 0;
      if (disabled) return;
      const file = e.dataTransfer.files?.[0];
      if (file) processFile(file);
    },
    [disabled] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // ── File picker ───────────────────────────────────────────────────────────

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
      // Reset input so the same file can be re-selected
      e.target.value = "";
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // ── Paste tab handler ─────────────────────────────────────────────────────

  const handlePasteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPasteText(e.target.value);
    onTextExtracted(e.target.value);
  };

  // ── Clear ─────────────────────────────────────────────────────────────────

  const handleClear = () => {
    setFileState({ status: "idle" });
    onTextExtracted("");
    onClear?.();
  };

  // ─────────────────────────────────────────────────────────────────────────

  const isIdle = fileState.status === "idle";
  const isExtracting = fileState.status === "extracting";
  const isDone = fileState.status === "done";
  const isError = fileState.status === "error";

  return (
    <div className="w-full space-y-0">
      {/* ── Tabs ─────────────────────────────────────────────────────────── */}
      <div className="flex border-4 border-border">
        {(["upload", "paste"] as Tab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-base font-bold uppercase tracking-widest transition-colors
              ${
                activeTab === tab
                  ? "bg-foreground text-background"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }
              ${tab === "upload" ? "border-r-2 border-border" : ""}`}
          >
            {tab === "upload" ? "📁 Upload File" : "✏️ Paste Text"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ═══════════════════════════════════════════════════════════════
            TAB: UPLOAD
        ═══════════════════════════════════════════════════════════════ */}
        {activeTab === "upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* ── Drop Zone ──────────────────────────────────────────── */}
            {isIdle && (
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => !disabled && inputRef.current?.click()}
                className={`
                  relative flex flex-col items-center justify-center gap-6 p-16 border-4 border-dashed
                  min-h-[320px] cursor-pointer transition-all duration-200 select-none
                  ${
                    isDragOver
                      ? "border-accent bg-accent/10 scale-[1.01]"
                      : "border-border bg-muted/10 hover:border-accent/60 hover:bg-accent/5"
                  }
                  ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
                role="button"
                tabIndex={0}
                aria-label="Upload resume file"
                onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
              >
                {/* Animated upload icon */}
                <motion.div
                  animate={isDragOver ? { scale: 1.15, y: -8 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-20 h-20 rounded-none border-4 flex items-center justify-center transition-colors
                    ${isDragOver ? "border-accent bg-accent text-black" : "border-border bg-muted text-muted-foreground"}`}
                >
                  <UploadCloud className="w-10 h-10" />
                </motion.div>

                <div className="text-center space-y-2">
                  <p className="text-2xl font-black uppercase tracking-tight">
                    {isDragOver ? "Drop it here!" : "Drag & drop your resume"}
                  </p>
                  <p className="text-muted-foreground font-bold uppercase text-sm tracking-widest">
                    or click to browse
                  </p>
                  <p className="text-muted-foreground/60 font-medium text-xs uppercase tracking-widest mt-4">
                    Supports PDF, TXT, DOC, DOCX
                  </p>
                </div>

                {/* Animated border glow when dragging */}
                <AnimatePresence>
                  {isDragOver && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 40px rgba(223,225,4,0.15)",
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* ── Extracting ─────────────────────────────────────────── */}
            {isExtracting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center gap-6 p-16 min-h-[320px] border-4 border-border border-dashed bg-muted/10"
              >
                <div className="w-20 h-20 border-4 border-accent flex items-center justify-center bg-accent/10">
                  <Loader2 className="w-10 h-10 text-accent animate-spin" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-2xl font-black uppercase tracking-tight">Extracting Text...</p>
                  <p className="text-muted-foreground font-bold uppercase text-sm tracking-widest">
                    {fileState.name}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ── Done ───────────────────────────────────────────────── */}
            {isDone && fileState.status === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-4 border-border bg-muted/10"
              >
                {/* File info header */}
                <div className="flex items-center justify-between gap-4 p-5 border-b-4 border-border bg-accent/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-7 h-7 text-accent shrink-0" />
                    <div>
                      <p className="font-black text-lg uppercase tracking-tight leading-tight">
                        {fileState.name}
                      </p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {fileState.size} · Text extracted successfully
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2 border-2 border-border hover:border-red-500 hover:text-red-500 transition-colors"
                    aria-label="Remove file"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Preview */}
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Extracted Preview
                  </p>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed bg-muted/20 p-4 border-2 border-border whitespace-pre-wrap break-words line-clamp-6">
                    {fileState.preview}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ── Error ──────────────────────────────────────────────── */}
            {isError && fileState.status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4 p-8 border-4 border-red-500 bg-red-500/5 min-h-[200px] justify-center"
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-black uppercase text-lg text-red-500 tracking-tight">
                      Upload Failed
                    </p>
                    <p className="text-sm font-bold text-red-500/80">
                      {fileState.name}
                    </p>
                    <p className="text-base font-medium text-foreground mt-2">
                      {fileState.message}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleClear}
                  className="self-start mt-2 px-6 py-3 border-2 border-border font-bold uppercase text-sm hover:border-foreground transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            )}

            {/* Hidden file input */}
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.txt,.doc,.docx"
              className="hidden"
              onChange={handleFileInput}
              disabled={disabled}
            />
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════════════════════════
            TAB: PASTE
        ═══════════════════════════════════════════════════════════════ */}
        {activeTab === "paste" && (
          <motion.div
            key="paste"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative border-4 border-t-0 border-border">
              <div className="p-4 border-b-2 border-border bg-muted/10 flex items-center gap-3">
                <FileText className="w-5 h-5 text-accent" />
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Copy and paste your resume text below
                </p>
              </div>
              <textarea
                id="resume-paste"
                className="w-full h-80 p-6 bg-background font-mono text-base resize-y focus:outline-none focus:ring-4 focus:ring-accent/50 border-0"
                placeholder={"Experience\nSoftware Engineer at Tech Corp...\n\nEducation\nB.Tech Computer Science..."}
                value={pasteText}
                onChange={handlePasteChange}
                disabled={disabled}
              />
              <div className="px-6 py-3 border-t-2 border-border bg-muted/10 flex justify-end">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    pasteText.length > 14000
                      ? "text-red-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {pasteText.length.toLocaleString()} / 15,000 chars
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
