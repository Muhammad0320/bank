import { Lexend } from "next/font/google";
import "../globals.css";
import GlobalStyles from "../globalStyles.js";
import Header from "../../../components/Header.jsx";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "YourBank | Home",
  description: "Empowering your financial journey",
};


import Abstract from '/public/assets/icons/layout-sm.svg'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={lexend.className} >

        <div className="absolute top-0 left-0 " >
            <Abstract />
        </div>
     
        <Header  />
        <main>

        {children}
        </main>
        
        </body>
    </html>
  );
}

