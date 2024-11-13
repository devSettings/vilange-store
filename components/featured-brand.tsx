import Image from 'next/image';

import nike from '@/public/images/nike.svg';
import adidas from '@/public/images/adidas.svg';
import puma from '@/public/images/puma.svg';
import zara from '@/public/images/zara.svg';
import gucci from '@/public/images/gucci.svg';
import chanel from '@/public/images/chanel.svg';
const featuredBrands = [
  { id: 1, name: 'Nike', logo: nike },
  { id: 2, name: 'Adidas', logo: adidas },
  { id: 3, name: 'Puma', logo: puma },
  { id: 4, name: 'Zara', logo: zara },
  { id: 5, name: 'Gucci', logo: gucci },
  { id: 6, name: 'Chanel', logo: chanel },
];

const FeaturedBrand = () => {
  return (
    <div>
      <section className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 mb-8 text-center'>
            Featured Brands
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center'>
            {featuredBrands.map((brand) => (
              <div key={brand.id} className='flex justify-center'>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className='object-contain h-20'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBrand;
