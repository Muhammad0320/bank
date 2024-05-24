import Cta from '../../../../components/Home/cta/Cta';
import Faq from '../../../../components/Home/faq/Faq';
import Benefits from './Benefits';
import CarreerHero from './Hero';
import Jobs from './Jobs';
import Values from './Values';

export const metadata = {
  title: 'Careers',
};

function Carrers() {
  return (
    <>
      <CarreerHero />
      <Values />
      <Benefits />
      <Jobs />
      <Faq />
      <Cta />
    </>
  );
}

export default Carrers;
