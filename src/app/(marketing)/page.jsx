import Faq from '../../../components/Home/faq/Faq';
import Cta from '../../../components/Home/Cta/Cta';
import Header from '../../../components/Home/header/Header';
import Products from '../../../components/Home/products/Products';
import UseCases from '../../../components/Home/products/UseCases';
import Features from '../../../components/Home/features/Features';
import Testimonials from '../../../components/Home/testimonials/Testimonials';

function Page() {
  return (
    <>
      <Header />
      <Products />
      <UseCases />
      <Features />
      <Faq />
      {/* <Testimonials />
      <Cta /> */}
    </>
  );
}

export default Page;
