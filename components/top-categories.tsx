import Image from 'next/image';
import Link from 'next/link';

const topCategories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/placeholder.svg?height=300&width=400',
  },
  { id: 2, name: 'Fashion', image: '/placeholder.svg?height=300&width=400' },
  {
    id: 3,
    name: 'Home & Garden',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
    image: '/placeholder.svg?height=300&width=400',
  },
];

const TopCategories = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 mb-8'>
          Top Categories
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {topCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className='group'
            >
              <div className='relative h-64 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 transition-opacity duration-300'>
                <Image
                  src={category.image}
                  alt={category.name}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60'></div>
                <div className='absolute bottom-4 left-4'>
                  <h3 className='text-xl font-semibold text-white'>
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;