import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bharath | Portfolio",
  description: "Software Engineer with profound knowledge in system designs , algorithms , problem solving , AI , ML and Computer Vision from Tirunelveli , Avaraikulam . Completed B.Tech in Artificial Intelligence and Data Science (2020 - 2024)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Simplified background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Primary gradient orbs - static positioning */}
          <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 opacity-60" />
          <div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 opacity-60" />
          <div className="absolute bottom-[10rem] right-[-10rem] h-[20rem] w-[20rem] rounded-full blur-[8rem] bg-gradient-to-br from-emerald-200 to-blue-200 dark:from-emerald-900/15 dark:to-blue-900/15 opacity-60" />
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
        <ThemeContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>

        {/* Chatling chatbot integration */}
        <Script
          id="chatling-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.chtlConfig = { 
                chatbotId: "4814696194",
              };
            `,
          }}
        />
        <Script
          src="https://chatling.ai/js/embed.js"
          data-id="4814696194"
          id="chtl-script"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
