import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kennedy McArthur — Animal & One Health Executive Search",
    template: "%s — Kennedy McArthur",
  },
  description:
    "Executive search and leadership advisory at the nexus of planetary health. Specialist focus on Animal Health and One Health sectors across Europe, North America, and Asia-Pacific.",
  metadataBase: new URL("https://kennedymcarthur.com"),
  openGraph: {
    title: "Kennedy McArthur — Animal & One Health Executive Search",
    description:
      "Executive search and leadership advisory at the nexus of planetary health.",
    siteName: "Kennedy McArthur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper text-ink min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
