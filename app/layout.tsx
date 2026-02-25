import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import ThemeSelector from "@/components/ThemeSelector";

export const metadata: Metadata = {
  title: "Jon Ezell — Senior Product Designer",
  description:
    "Senior Product Designer specializing in AI-powered products, systems thinking, and consumer experience.",
  metadataBase: new URL("https://ezell.guru"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageTransition />
        <CustomCursor />
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
