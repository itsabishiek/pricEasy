import { Button } from "@/components/ui/button";
import Image from "next/image";
import Trust from "./_components/trust";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full">
      <div className="flex flex-col-reverse h-[calc(100vh-60px)] md:flex-row items-center justify-center sm:gap-[25px] mb-[20px] md:mb-0">
        <div className="flex-1 flex flex-col justify-center p">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Smart pricing, Global Reach!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 font-semibold mt-[30px]">
            Boost your global revenue by up to 40% with location-based dynamic
            pricing. PricEasy uses Purchasing Power Parity (PPP) to optimize
            product prices for every market. Customize pricing, manage with ease
            on a sleek dashboard, and embed into your app in minutes. Join 100+
            businesses already pricing smarter!
          </p>

          <SignedIn>
            <Button className="mt-[30px] font-bold w-fit" size="lg" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </SignedIn>

          <SignedOut>
            <SignUpButton>
              <Button className="mt-[30px] font-bold w-fit" size="lg">
                Get started for free
              </Button>
            </SignUpButton>
          </SignedOut>

          <Trust />
        </div>
        <div className="flex-1 flex flex-col-reverse items-center justify-center w-full md:px-[40px] py-10">
          <Image
            src="/img/hero1.svg"
            alt=""
            height={350}
            width={350}
            className="hidden md:flex md:self-start"
          />
          <Image
            src="/img/hero2.svg"
            alt=""
            height={350}
            width={350}
            className="md:self-end"
          />
        </div>
      </div>
    </div>
  );
}
