import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import ThemeSelector from "@/components/ThemeSelector";

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "Jon Ezell — Senior Product Designer",
  description:
    "Senior Product Designer specializing in AI-powered products, systems thinking, and consumer experience.",
  metadataBase: new URL("https://ezell.guru"),
  openGraph: {
    title: "Jon Ezell — Senior Product Designer",
    description:
      "Senior Product Designer specializing in AI-powered products, systems thinking, and consumer experience.",
    url: "https://ezell.guru",
    images: [{ url: "/transition.png", width: 2416, height: 1296 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon Ezell — Senior Product Designer",
    description:
      "Senior Product Designer specializing in AI-powered products, systems thinking, and consumer experience.",
    images: ["/transition.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Blocking script: set data-theme from localStorage before first paint
            so CSS [data-theme] selectors apply the correct panel bg immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
<Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vix86wayzr");
        `}</Script>
      </head>
      <body className="antialiased">
        <PageTransition />
        <CustomCursor />
        <ThemeSelector />
        {children}
      </body>
    </html>
  );
}
