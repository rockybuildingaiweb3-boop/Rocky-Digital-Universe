"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SpatialGalaxyMap } from "@/features/galaxy/spatial-galaxy-map";

export default function HomePage() {
  const router = useRouter();

  // Check first-time visitor -> route to opening experience
  useEffect(() => {
    try {
      const seen = localStorage.getItem("rockyos_prologue_seen");
      const urlParams = new URLSearchParams(window.location.search);
      if (!seen && !urlParams.get("direct")) {
        router.replace("/opening");
      }
    } catch (e) {
      // Storage resilience
    }
  }, [router]);

  return (
    <main className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      <SpatialGalaxyMap />
    </main>
  );
}
