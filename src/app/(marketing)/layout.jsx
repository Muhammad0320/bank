import { Lexend } from 'next/font/google';
import GlobalStyles from '../globalStyles.js';
import '../globals.css';

import Abstract from '/public/assets/icons/layout.svg';
import { StyledBody, StyledMain } from '../../../styles/StyledMain';

import NavBar from '../../../components/NavBar.jsx';
import Footer from '../../../components/Home/footer/Footer.jsx';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'YourBank | Home',
  description: 'Empowering your financial journey',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <StyledBody className={lexend.className}>
        <div className="absolute top-0 left-0 ">
          <Abstract />
        </div>

        <NavBar />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledBody>
    </html>
  );
}
