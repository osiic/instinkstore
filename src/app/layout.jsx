import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import { Navbar } from "./../components/separate/Navbar";
import { Footer } from "./../components/separate/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instink Store",
  description: "Web Sotre babi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
