import { Rasa } from "@next/font/google";
import styles from "./home.module.css";
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
      <body className={styles.body}>{children}</body>
    </html>
  );
}
