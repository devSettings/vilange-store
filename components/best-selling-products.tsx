import { Star } from 'lucide-react';
import Link from 'next/link';
import Thumbnail from './thumbnail';
import { Button } from './ui/button';

const BestSellingProducts = () => {
  const bestSellingProducts = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 79.99,
      rating: 4.5,
      image: 'img-5_plim2d',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      rating: 4.7,
      image: 'img-9_msnga4',
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 59.99,
      rating: 4.3,
      image: 'aaa_oko56n',
    },
    {
      id: 4,
      name: 'Portable Charger',
      price: 39.99,
      rating: 4.6,
      image: 'IMG_1080_iiayjx',
    },
  ];
  return (
    <section className='bg-gray-50 py-16'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <h2 className='text-3xl text-center lg:text-left font-extrabold text-black mb-8'>
          Best Selling Products
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4'>
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white shadow-sm rounded-lg overflow-hidden'
            >
              <div className='relative m-2  rounded-lg overflow-hidden'>
                <Thumbnail
                  imgUrl={product.image}
                  imgAlt={product.name}
                  className='transition-transform  w-full duration-300 group-hover:scale-110'
                />
              </div>
              <div className='p-4'>
                <h3 className='text-sm font-semibold text-[#9a3412] line-clamp-1'>
                  {product.name}
                </h3>
                <p className='text-gray-600'>${product.price.toFixed(2)}</p>
                <div className='flex items-center mt-2'>
                  <Star className='h-5 w-5 text-yellow-400 fill-current' />
                  <span className='ml-1 text-sm text-gray-600'>
                    {product.rating}
                  </span>
                </div>
                <Button
                  variant='outline'
                  className='w-full mt-4 shadow-none border-[0.1px] font-normal rounded-full'
                  asChild
                >
                  <Link href={`/product/${product.id}`}>View Product</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
