import Faq from '../../../../components/Home/faq/Faq';
import Protection from './Protection';
import SecurityHero from './SecurityHero';

export const metadata = {
  title: 'Security',
};

function Security() {
  return (
    <>
      <SecurityHero />
      <Protection />
      <Faq />
    </>
  );
}

export default Security;
