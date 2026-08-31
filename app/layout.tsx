import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rocky's Digital Universe // Personal Operating System",
  description: "A 10-year personal operating system to document growth, showcase capabilities, and share knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
