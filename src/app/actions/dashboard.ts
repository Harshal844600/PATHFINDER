"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deletePath(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  const { error } = await supabase.from('saved_paths').delete().match({ id, user_id: user.id });
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
}

export async function deleteResumeAnalysis(id: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  const { error } = await supabase.from('saved_resume_analyses').delete().match({ id, user_id: user.id });
  if (error) throw new Error(error.message);

  revalidatePath("/dashboard");
}
