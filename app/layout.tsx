import { Rasa } from "@next/font/google";
import "./global.css";

const rasa = Rasa({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-rasa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={rasa.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
