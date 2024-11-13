'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Discover Amazing Products !';

  useEffect(() => {
    if (text.length < fullText.length) {
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
    }
  }, [text]);

  return (
    <div className='relative h-[85vh] flex items-center justify-center overflow-hidden  px-4 sm:px-6'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='balloon-pattern absolute inset-0 opacity-5'></div>
      </div>
      <div className='relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl z-10'>
        <motion.h1
          className='text-4xl sm:text-4xl space-y-2.5  md:text-5xl lg:text-9xl  font-black mb-4 sm:mb-6 text-[#9a3412]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>Your</p>
          <p>Shopping Cart</p>
          <p className='text-muted-foreground block'>Awaits</p>
        </motion.h1>
        <motion.p
          className='text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 h-12 sm:h-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {text}
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row w-full gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href='#'
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-11 rounded-full justify-between shadow-none   text-muted-foreground outline-none hover:bg-white  bg-white border-[0.1px]'
            )}
          >
            <p>Search for items...</p>
            <Search className='' />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
