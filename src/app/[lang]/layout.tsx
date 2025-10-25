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

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: "es" | "en" | "br" }>; 
}

export default async function RootLayout({children,params}: LayoutProps) {
  
  const resolvedParams = await params; 
  const { lang } = resolvedParams; 
  
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
