import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PathList } from "@/components/PathList";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default async function SavedRunPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { id } = await params;
  const { data: saved } = await supabase.from('saved_paths').select('*').match({ id, user_id: user.id }).single();

  if (!saved) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto w-full mb-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8"><ArrowLeft className="mr-2 w-5 h-5" /> Back to Dashboard</Button>
        </Link>
        <div className="bg-accent text-accent-foreground font-bold uppercase p-4 mb-12 border-2 border-border text-center text-xl">
          SAVED RUN FROM {new Date(saved.created_at).toLocaleDateString()}
        </div>
      </div>
      
      {/* Reusing PathList to render the data */}
      <PathList paths={saved.path_data} isReadOnly />
    </div>
  );
}
