import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import ParentTheme from "@components/Theme/parentTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParentTheme>
      <Component {...pageProps} />
    </ParentTheme>
  );
}
