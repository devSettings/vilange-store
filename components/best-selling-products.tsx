import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';
import Reviews from './review';
import Thumbnail from './thumbnail';
import { Button } from './ui/button';

const BestSellingProducts = () => {
  const bestSellingProducts = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 13250,
      rating: 4.5,
      image: 'img-5_plim2d',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      rating: 1500,
      image: 'img-9_msnga4',
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 59.99,
      rating: 8000,
      image: 'aaa_oko56n',
    },
    {
      id: 4,
      name: 'Portable Charger',
      price: 13250,
      rating: 4.6,
      image: 'IMG_1080_iiayjx',
    },
  ];
  return (
    <section className='bg-gray-0 py-16'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <h2 className='text-3xl text-center lg:text-left font-extrabold text-black mb-8'>
          Best Selling Products
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4'>
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white border-gray-200 border-[0.1px] rounded-lg overflow-hidden'
            >
              <div className='relative m-2 rounded-md overflow-hidden'>
                <Thumbnail
                  imgUrl={product.image}
                  imgAlt={product.name}
                  className='transition-transform  w-full duration-300 group-hover:scale-110'
                />
              </div>
              <div className='p-4'>
                <h3 className='text-sm mb-2 font-medium text-muted-foreground line-clamp-1'>
                  {product.name}
                </h3>
                <p className='text-black font-medium text-base mb-2'>
                  <span className='text-sm mr-1'>HTG</span>
                  {product.price.toFixed(0)}
                </p>
                <Reviews
                  iconSize={17}
                  averageReview={product.rating}
                  totalReviews={product.rating}
                />
                <Button
                  variant='outline'
                  size='sm'
                  className='w-full mt-6  bg-gray-50 text-black  shadow-none border-[0.1px] font-normal rounded-full'
                  asChild
                >
                  <Link href={`/product/${product.id}`}>
                    <MdShoppingCart className='' />
                    Add to Cart
                  </Link>
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
