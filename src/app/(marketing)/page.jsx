import Faq from '../../../components/Home/faq/Faq';
import Header from '../../../components/Home/header/Header';
import Products from '../../../components/Home/products/Products';
import UseCases from '../../../components/Home/products/UseCases';
import Features from '../../../components/Home/features/Features';

function Page() {
  return (
    <>
      <Header />
      <Products />
      <UseCases />
      <Features />
      <Faq />
    </>
  );
}

export default Page;
