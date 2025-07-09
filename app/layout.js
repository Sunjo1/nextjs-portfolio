import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({

  subsets: ["latin"],
  weight: ["500", "600"]
});

const ovo = Ovo({

  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Sunjo",
  description: "Sunjo is a personal blog and portfolio site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
