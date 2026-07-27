import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/actions/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";

export async function Navbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const navLinks = user ? (
    <>
      <Link href="/analyze-resume">
        <Button variant="ghost" className="text-sm font-bold uppercase hover:text-accent transition-colors">
          Resume
        </Button>
      </Link>
      <Link href="/dashboard">
        <Button variant="ghost" className="text-sm font-bold uppercase hover:text-accent transition-colors">
          Dashboard
        </Button>
      </Link>
      <form action={logout}>
        <Button
          type="submit"
          variant="outline"
          className="text-sm font-bold uppercase border-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
        >
          Logout
        </Button>
      </form>
    </>
  ) : (
    <>
      <Link href="/login">
        <Button variant="ghost" className="text-sm font-bold uppercase hover:text-accent transition-colors">
          Login
        </Button>
      </Link>
      <Link href="/signup">
        <Button className="text-sm font-bold uppercase shadow-[4px_4px_0_0_#DFE104] hover:shadow-[1px_1px_0_0_#DFE104] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
          Sign Up
        </Button>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-border p-4 px-6 bg-background/80 backdrop-blur-md">
      {/* Logo */}
      <Link
        href="/"
        className="group flex items-center gap-2.5 font-black tracking-tighter uppercase hover:text-accent transition-colors text-xl"
      >
        <Image
          src="/logo.png"
          alt="PathFinder logo"
          width={32}
          height={32}
          className="border-2 border-black group-hover:scale-110 transition-transform"
          priority
        />
        PathFinder
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2">
        <ThemeToggle />
        {navLinks}
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden items-center gap-2">
        <ThemeToggle />
        <MobileNav isLoggedIn={!!user} />
      </div>
    </nav>
  );
}
