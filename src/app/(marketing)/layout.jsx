import { Lexend } from "next/font/google";
import GlobalStyles from "../globalStyles.js";
import "../globals.css";
import Header from "../../../components/Header.jsx";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "YourBank | Home",
  description: "Empowering your financial journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={lexend.className}>

        <Header  />
        {children}
        
        </body>
    </html>
  );
}

