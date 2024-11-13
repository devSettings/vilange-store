import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className='bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500  [text-shadow:0_0_rgba(0,0,0,0.1)] py-16 mx-2 rounded-lg'>
      <div className='max-w-7xl  md:mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-extrabold text-white mb-4'>
          Join Our Newsletter
        </h2>
        <p className='text-base text-white mb-8'>
          Stay updated with the latest products and exclusive offers!
        </p>
        <form className='max-w-md mx-auto flex'>
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary'
            required
          />
          <Button type='submit' className='rounded-l-none h-12'>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
