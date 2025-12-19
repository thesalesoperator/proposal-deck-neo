import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Executive Coaching Proposal | Rev Pilot",
  description: "Transform your business with personalized 1:1 coaching from Jordan. Sales, events, affiliate systems, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
