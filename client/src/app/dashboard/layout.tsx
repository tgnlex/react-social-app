import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/header.tsx';
import Navbar from '@/components/layout/navbar.tsx';
import Footer from '@/components/layout/footer.tsx';
import styles from './layout.module.css';
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header className={styles.header} />
        <Navbar className={styles.navbar} />
        {children}
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
