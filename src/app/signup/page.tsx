"use client";

import { useActionState, useState } from "react";
import { signup, signInWithGoogle } from "@/app/actions/auth";
import { useToast } from "@/components/ui/Toast";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, null);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast(state.error, "error");
    }
  }, [state, toast]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md border-4 shadow-[8px_8px_0_0_#DFE104]">
        <CardHeader className="space-y-2 border-b-2 border-border pb-8 pt-8">
          <CardTitle className="text-4xl">Sign Up</CardTitle>
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Start discovering your path
          </p>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-6 pt-8">
            <div className="space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="YOU@EXAMPLE.COM"
                required
                aria-invalid={!!state?.error}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  aria-invalid={!!state?.error}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pb-8">
            <Button type="submit" className="w-full text-lg h-16" disabled={isPending}>
              {isPending ? "Signing up..." : "Sign Up"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm font-medium uppercase text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-foreground hover:text-accent transition-colors underline underline-offset-4">
                Login
              </Link>
            </p>
          </CardFooter>
        </form>

        <div className="px-6 pb-6">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t-2 border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground font-bold tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          <form action={signInWithGoogle}>
            <Button variant="outline" type="submit" className="w-full text-lg h-16 border-2">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
          </form>
        </div>

      </Card>
    </div>
  );
}
