import BestSellingProducts from '@/components/best-selling-products';
import CallToAction from '@/components/call-to-action';
import CustomerReviews from '@/components/customer-reviews';
import FeaturedBrand from '@/components/featured-brand';
import TopCategories from '@/components/top-categories';
import TrustIndicators from '@/components/trus-indicators';
import { AuroraHero } from '@/components/ui/aurora-hero';

const HomePage = () => {
  return (
    <section className=''>
      <AuroraHero />
      <BestSellingProducts />
      <TopCategories />
      <FeaturedBrand />
      <CallToAction />
      <TrustIndicators />
      <CustomerReviews />
    </section>
  );
};

export default HomePage;
