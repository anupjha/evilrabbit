import "../styles/globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import Footer from "@/ui/Footer";

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: "no",
    themeColor: "000000",
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} h-dvh flex flex-col antialiased`}>
      <body className="flex flex-col grow">
        <Toaster />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
