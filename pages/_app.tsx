import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "rsuite/dist/rsuite.min.css";
import ParentTheme from "@components/Theme/parentTheme";
import { SessionProvider } from "next-auth/react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Session } from "next-auth";

const queryCache = new QueryCache();

export default function App({ Component, pageProps }: AppProps & { pageProps: { session?: Session } }) {
  const queryClient = new QueryClient({
    queryCache,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
