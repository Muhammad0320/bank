import Faq from '../../../components/Home/faq/Faq';
import Features from '../../../components/Home/features/Features';
import Header from '../../../components/Home/header/Header';
import UseCases from '../../../components/Home/products/UseCases';
import Testimonials from '../../../components/Home/testimonials/Testimonials';

function Page() {
  return (
    <>
      <Header />
      <UseCases />
      <Features />
      <Faq />
      <Testimonials />
    </>
  );
}

export default Page;
