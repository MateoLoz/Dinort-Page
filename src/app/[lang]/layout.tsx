import type { Metadata } from "next";
import '../globals.css';

import { TanstackProvider } from "@/components/providers/tanstack-provider";
import ScrollToTop from "./utils/ScrollToTop";

export const metadata: Metadata = {
  title: "Dinort Mecanizados S.A.S",
  description: "Dinort Mecanizados S.A.S",
  icons: {
    icon: "/Dinort.svg",
    shortcut: "/Dinort.svg",
    apple: "/Dinort.svg",
  },
};

type layoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: layoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head></head>
      <body className={`antialiased p-2 sm:p-4 bg-main`}>
      <ScrollToTop/>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
