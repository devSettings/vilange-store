import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Star } from 'lucide-react';

const bestSellingProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79.99,
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 59.99,
    rating: 4.3,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'Portable Charger',
    price: 39.99,
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=200',
  },
];

const BestSellingProducts = () => {
  return (
    <section className='bg-slate-50 py-16'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <h2 className='text-3xl text-center lg:text-left font-extrabold text-black mb-8'>
          Best Selling Products
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white border-[0.1px] rounded-lg overflow-hidden'
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-sm font-semibold text-gray-900 line-clamp-1'>
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
                  size='sm'
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