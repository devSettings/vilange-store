import { Star } from 'lucide-react';
import React from 'react';

const CustomerReviews = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-extrabold text-black mb-8 text-center'>
          What Our Customers Say
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((review) => (
            <div
              key={review}
              className='bg-white p-6 rounded-lg border-[0.1px]'
            >
              <div className='flex items-center mb-4'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='h-5 w-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <p className='text-gray-600 mb-4'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className='font-semibold'>- Happy Customer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
