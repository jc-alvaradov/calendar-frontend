import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components/ui/custom";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} flex flex-col antialiased min-h-screen`}
      >
        <ErrorBoundary>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
