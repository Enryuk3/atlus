import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/header";


export const metadata: Metadata = {
  title: "Atlus",
  description: "Atlus es tu gimnasio 24/7 en Chorrillos. Entrena fuerza y salud en un ambiente masculino y profesional. ¡Primera clase gratis, sin excusas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-black text-gray-300`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
