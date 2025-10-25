import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dinort",
  description: "Dinort Mecanizados S.A.S",
  icons:{
    "icon":"/Dinort.svg",
    "shortcut":"/Dinort.svg",
    "apple":"/Dinort.svg"
    }
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "br" }];
}





export default async function RootLayout({children,
  params}: Readonly<{
  children: React.ReactNode,
  params: Promise<{lang: "es" | "en" | "br"}>
}>) {
  
  const lang  =  (await params).lang;
  
  return (
    <html lang={lang}>
      <head>
      </head>
      <body
        className={`p-2 sm:p-4 antialiased bg-[var(--mainBackground)]`}
      >
        {children}
      </body>
    </html>
  );
}
