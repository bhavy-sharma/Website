import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Navokta Innovation | Digital Experiences That Captivate",
  description:
    "We build immersive, high-converting web experiences. Contact us to elevate your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="has-custom-cursor">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
