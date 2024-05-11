import { Lexend } from 'next/font/google';
import '../globals.css';
import GlobalStyles from '../globalStyles.js';
import Header from '../../../components/Header.jsx';
import Abstract from '/public/assets/icons/layout-sm.svg';
import { StyledBody, StyledMain } from '../../../styles/StyledMain';

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

        <StyledMain>
          <Header />
          {children}
        </StyledMain>
      </StyledBody>
    </html>
  );
}
