import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "rsuite/dist/rsuite.min.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps & { pageProps: { session?: Session } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
