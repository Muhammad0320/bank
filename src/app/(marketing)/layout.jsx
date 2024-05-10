import { Lexend } from "next/font/google";
import GlobalStyles from "../globalStyles.js";
import "../globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "YourBank | Home",
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

