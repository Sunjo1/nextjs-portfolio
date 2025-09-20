import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "My Portfolio - William",
  description: "William is a personal blog and portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth " >
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden
      dark:bg-darkTheme dark:text-white `}>
        {children}
      </body>
    </html>
  );
}
