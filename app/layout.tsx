import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentalo | En cours de création",
  description: "Les ateliers Mentalo proposent des espaces de réflexion ludique, d'analyse et de visite pour les jeunes de 15 à 20 ans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
