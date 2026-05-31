import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viveka Cloud | The Dharma Protocol",
  description:
    "The Dharma Protocol is an AI-powered decision-intelligence companion that helps humans examine consequences before they decide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}