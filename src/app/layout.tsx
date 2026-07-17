import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Zalak Karnik | AI Engineer & Data Scientist",
  description: "AI Engineer with hands-on experience building LLM-powered systems — RAG pipelines, Text-to-SQL, and intelligent document processing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${dmSans.className} min-h-full flex flex-col bg-[#faf8f5] text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
