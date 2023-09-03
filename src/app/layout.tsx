import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logger",
  description: "Application to log your daily measurements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles["main-bar"]}>
          <p className={styles.title}>Logger</p>
        </div>

        <div className={styles["secondary-bar"]}>
          <p className={styles.link}>
            <Link href="/">Home</Link>
          </p>
          <p className={styles.link}>
            <Link href="/trend">Trend</Link>
          </p>
        </div>

        <button className={styles.floatingButton}>+</button>

        {children}
      </body>
    </html>
  );
}
