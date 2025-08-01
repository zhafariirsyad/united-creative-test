import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Dynamic Dashboard Page",
    description: "Dynamic Dashboard Page",
};
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h4 className="text-2xl sm:text-4xl font-bold">
          SKILL TEST FULL STACK DEVELOPER - BALI UNITED
        </h4>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/static-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Test Software Developer Front-End
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Test Software Developer Back-End
        </a>
      </main>
    </div>
  );
}
