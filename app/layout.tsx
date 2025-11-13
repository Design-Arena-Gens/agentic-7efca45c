"use client";

import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Trap of Emotional Comfort</title>
        <meta
          name="description"
          content="A conversational deep dive into the trap of emotional comfort for an 18–35 U.S. audience."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
