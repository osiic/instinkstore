import "tailwindcss/tailwind.css";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instink Store",
  description: "Web Sotre babi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className, "min-h-screen flex flex-col justify-between")
        }
      >
        {/* <NavBar> */}
        <nav className="px-[120px] py-[50px] flex justify-between items-center">
          <h2 className="text-3xl font-semibold border-b-2 border-black">
            Instink Store
          </h2>
          <div className="flex space-x-10">
            <Link href="/" className="text-xl font-normal">
              Home
            </Link>
            <Link href="/" className="text-xl font-normal">
              About
            </Link>
            <Link href="/" className="text-xl font-normal">
              Discord
            </Link>
            <Link href="/" className="text-xl font-normal">
              Instagram
            </Link>
          </div>
        </nav>
        {/* <NavBar> */}

        {/* <Main> */}
        <main className="mix-w-10/12 mx-auto">{children}</main>
        {/* </Main> */}

        {/* <Footer> */}
        <footer className="px-[120px]">Footer Boy</footer>
        {/* </Footer> */}
      </body>
    </html>
  );
}
