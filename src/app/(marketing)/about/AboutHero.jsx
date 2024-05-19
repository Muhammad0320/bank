import HeroHeader from '../../../../components/ui/HeroHeader';

const heroProps = {
  withGradient: 'Excellence!',
  withoutGradient: 'Where banking Meets',
  greeting: 'Welcome to YourBank',
  src: '/assets/images/about.png',
};

function AboutHero() {
  return (
    <HeroHeader {...heroProps}>
      At YourBank, we believe that banking should be more than just
      transactions. It should be an experience that empowers individuals and
      businesses to thrive and reach their financial goals. As a trusted
      financial institution, we are committed to delivering exceptional banking
      services that go beyond expectations. With a focus on innovation,
      personalized solutions, and unwavering integrity, we strive to provide the
      best banking experience for our valued customers. Join us on this exciting
      journey and discover a new level of banking excellence.
    </HeroHeader>
  );
}

export default AboutHero;
