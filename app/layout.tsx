import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ErrorBoundary from "./error-boundary";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutricionista Tamara Fuentealba",
  description: "Nutricionista Online y Presencial",
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
