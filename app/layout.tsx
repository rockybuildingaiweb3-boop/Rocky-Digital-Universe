import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { GlobalHeader } from "@/components/organisms/global-header";
import { GlobalFooter } from "@/components/organisms/global-footer";

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
      <body className="flex flex-col min-h-screen antialiased bg-[var(--bg-core)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-cyan-500/20 selection:text-cyan-300">
        <ThemeProvider>
          <LanguageProvider>
            {/* Global Header Shell */}
            <GlobalHeader />

            {/* Page Content Shell */}
            <div className="flex-1 flex flex-col">
              {children}
            </div>

            {/* Global Footer Shell */}
            <GlobalFooter />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
