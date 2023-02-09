import { Poppins } from "@next/font/google";
import "./global.css";

const poppins = Poppins({
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
    <html lang="es" className={poppins.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
