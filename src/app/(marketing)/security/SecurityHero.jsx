import HeroHeader from '../../../../components/ui/HeroHeader';

const heroProps = {
  withGradient: 'Top Priority!',
  withoutGradient: 'Your Security is Our',
  greeting: 'Welcome to YourBank',
  src: '/assets/images/security.png',
};

function SecurityHero() {
  return (
    <HeroHeader {...heroProps}>
      At YourBank, we understand the importance of keeping your financial
      information secure. We employ robust security measures and advanced
      technologies to protect your personal and financial data. Rest assured
      that when you bank with us, your security is our utmost priority.
    </HeroHeader>
  );
}

export default SecurityHero;
