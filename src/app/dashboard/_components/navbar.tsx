import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { ChartCandlestick } from "lucide-react";
import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="w-full h-[60px] sticky top-0 z-10 border-b bg-white dark:bg-[#121212] border-gray-600/30">
      <nav className="flex h-full items-center justify-between container px-5">
        <Link href="/dashboard" className="flex items-center gap-1">
          <ChartCandlestick className="text-primary" />
          <h1 className="font-bold text-xl">
            Pric<b className="text-primary">E</b>azy!
          </h1>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-8 mr-3">
            <Link href="/dashboard/products">Products</Link>
            <Link href="/dashboard/analytics">Analytics</Link>
            <Link href="/dashboard/subscription">Subscription</Link>
          </div>

          <UserButton />

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
