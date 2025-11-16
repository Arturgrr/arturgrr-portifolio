import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.className}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
