import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { AuthProvider } from "./auth-provider";
import ClientLayout from "../app/clientLayout"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"] 
});

export const metadata: Metadata = {
  title: "Beauty Salon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${roboto.className}`}>
          <ClientLayout>
        <AuthProvider>{children}</AuthProvider>
        </ClientLayout>
      </body>

    </html>
  );
}
