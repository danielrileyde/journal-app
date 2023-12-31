"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import { page } from "next/dist/build/templates/app-page";
import { SWRConfig } from "swr";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          //@ts-ignore
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <SessionProvider session={session}>
        <html lang="en">
          <body suppressHydrationWarning={true}>{children}</body>
        </html>
      </SessionProvider>
    </SWRConfig>
  );
}
