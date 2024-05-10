import { Lexend } from "next/font/google";
import "./globals.css";
import GlobalStyles from "./globalStyles";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "YourBank",
  description: "Empowering your financial journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
