"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md border-4 shadow-[8px_8px_0_0_#DFE104]">
        <CardHeader className="space-y-2 border-b-2 border-border pb-8 pt-8">
          <CardTitle className="text-4xl">Login</CardTitle>
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Access your saved career paths
          </p>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-6 pt-8">
            {state?.error && (
              <div className="bg-red-500/10 text-red-500 p-4 border-2 border-red-500 font-bold uppercase text-sm">
                {state.error}
              </div>
            )}
            <div className="space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="YOU@EXAMPLE.COM"
                required
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pb-8">
            <Button type="submit" className="w-full text-lg h-16" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm font-medium uppercase text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
