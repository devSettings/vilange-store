import React from 'react';

const TrustIndicators = () => {
  return (
    <section className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Free Shipping</h3>
            <p className='text-muted-foreground'>On orders over $50</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>30-Day Returns</h3>
            <p className='text-muted-foreground'>Hassle-free return policy</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Secure Payments</h3>
            <p className='text-muted-foreground'>Your data is protected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
