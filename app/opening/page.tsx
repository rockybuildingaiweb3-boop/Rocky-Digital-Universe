import { OpeningExperience } from "@/features/opening/opening-experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opening Prologue // Human-AI Awakening // RockyOS",
  description: "A four-act narrative exploring the evolution of human intuition and artificial intelligence.",
};

export default function OpeningPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem-5rem)]">
      <OpeningExperience />
    </main>
  );
}
