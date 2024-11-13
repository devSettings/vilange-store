import BestSellingProducts from '@/components/best-selling-products';
import CallToAction from '@/components/call-to-action';
import CustomerReviews from '@/components/customer-reviews';
import Hero from '@/components/hero';
import TopCategories from '@/components/top-categories';
import TrustIndicators from '@/components/trus-indicators';

const HomePage = () => {
  return (
    <section className=''>
      <Hero />
      <BestSellingProducts />
      <TopCategories />
      <CallToAction />
      <TrustIndicators />
      <CustomerReviews />
    </section>
  );
};

export default HomePage;
