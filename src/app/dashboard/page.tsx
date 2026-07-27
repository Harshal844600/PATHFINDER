import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { ArrowRight, Trash2, FileText } from "lucide-react";
import { deletePath, deleteResumeAnalysis } from "@/app/actions/dashboard";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: pathsData } = await supabase.from('saved_paths').select('*').order('created_at', { ascending: false });
  const { data: resumesData } = await supabase.from('saved_resume_analyses').select('*').order('created_at', { ascending: false });

  const paths = pathsData || [];
  const resumes = resumesData || [];

  return (
    <div className="flex flex-col min-h-screen py-16 px-4 max-w-7xl mx-auto w-full space-y-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Dashboard</h1>
          <p className="text-xl text-muted-foreground uppercase mt-2 font-medium">Manage your saved career paths and resume analyses</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/discovery">
            <Button className="h-16 px-8 text-lg w-full sm:w-auto">New Discovery <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
          <Link href="/analyze-resume">
            <Button variant="outline" className="h-16 px-8 text-lg w-full sm:w-auto">Analyze Resume <FileText className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </div>

      {/* Discovery Runs Section */}
      <section>
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 border-b-4 border-border pb-2">Discovery Runs</h2>
        {paths.length === 0 ? (
          <div className="text-center py-16 border-4 border-dashed border-border bg-muted/10">
            <p className="text-lg text-muted-foreground uppercase font-medium">No Discovery Paths Saved</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paths.map(run => (
              <Card key={run.id} className="border-4 hover:shadow-[8px_8px_0_0_#DFE104] transition-shadow flex flex-col">
                <CardHeader className="border-b-2 border-border pb-4">
                  <CardTitle className="text-2xl">Discovery Run</CardTitle>
                  <p className="text-sm uppercase text-muted-foreground font-bold">
                    {new Date(run.created_at).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent className="pt-6 flex-1">
                  <h4 className="font-bold uppercase text-lg mb-2">Paths matched:</h4>
                  <ul className="space-y-1">
                    {run.path_data.slice(0, 3).map((p: any, i: number) => (
                      <li key={i} className="text-muted-foreground uppercase font-medium line-clamp-1">• {p.title}</li>
                    ))}
                    {run.path_data.length > 3 && (
                      <li className="text-muted-foreground uppercase font-medium">...and {run.path_data.length - 3} more</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-4 border-t-2 border-border p-4 bg-muted/20">
                  <Link href={`/dashboard/${run.id}`} className="flex-1">
                    <Button className="w-full">View <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                  <form action={async () => { "use server"; await deletePath(run.id); }}>
                    <Button type="submit" variant="outline" size="icon" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black shrink-0">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Resume Analyses Section */}
      <section>
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8 border-b-4 border-border pb-2">Resume Analyses</h2>
        {resumes.length === 0 ? (
          <div className="text-center py-16 border-4 border-dashed border-border bg-muted/10">
            <p className="text-lg text-muted-foreground uppercase font-medium">No Resume Analyses Saved</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumes.map(run => (
              <Card key={run.id} className="border-4 hover:shadow-[8px_8px_0_0_#DFE104] transition-shadow flex flex-col">
                <CardHeader className="border-b-2 border-border pb-4 bg-accent/10">
                  <CardTitle className="text-2xl flex items-center gap-2"><FileText className="w-6 h-6"/> Resume Analysis</CardTitle>
                  <p className="text-sm uppercase text-muted-foreground font-bold">
                    {new Date(run.created_at).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent className="pt-6 flex-1">
                  <h4 className="font-bold uppercase text-lg mb-2">Top Job Matches:</h4>
                  <ul className="space-y-1">
                    {run.analysis_data.jobMatches.slice(0, 3).map((job: any, i: number) => (
                      <li key={i} className="text-muted-foreground uppercase font-medium line-clamp-1">
                        • {job.title} <span className="text-accent font-bold">({job.matchScore})</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-4 border-t-2 border-border p-4 bg-muted/20">
                  <Link href={`/dashboard/resume/${run.id}`} className="flex-1">
                    <Button className="w-full">View <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                  <form action={async () => { "use server"; await deleteResumeAnalysis(run.id); }}>
                    <Button type="submit" variant="outline" size="icon" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black shrink-0">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
