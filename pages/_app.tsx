import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "rsuite/dist/rsuite.min.css";
import { SessionProvider } from "next-auth/react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { PuffLoader } from "react-spinners";

const queryCache = new QueryCache();

export default function App({
  Component,
  pageProps,
}: AppProps & { pageProps: { session?: Session } }) {
  const queryClient = new QueryClient({
    queryCache,
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false); // State for loading spinner
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
          {loading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
              <PuffLoader color="#000000" />
            </div>
          )}
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
