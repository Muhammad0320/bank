import AboutHero from './AboutHero';
import Mission from './Mission';
import Press from './Press';

export const metadata = {
  tile: 'About Us ',
};

function About() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Press />
    </>
  );
}

export default About;
