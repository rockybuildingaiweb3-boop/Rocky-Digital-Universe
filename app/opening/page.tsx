import { OpeningExperience } from "@/features/opening/opening-experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opening Prologue // Human-AI Awakening // RockyOS",
  description: "A four-act interactive narrative exploring the evolution of human intuition and artificial intelligence.",
};

export default function OpeningPage() {
  return (
    <main className="w-full h-full">
      <OpeningExperience />
    </main>
  );
}
