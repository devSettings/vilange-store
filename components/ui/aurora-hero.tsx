'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from '../ui/aurora-background';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';
import { Search } from 'lucide-react';

export function AuroraHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className='text-3xl md:text-7xl font-bold dark:text-white text-left'>
          <motion.h1
            className='text-5xl sm:text-4xl font-black space-y-2.5  md:text-5xl lg:text-9xl  lg:font-black mb-10 sm:mb-6 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] animate-aurora text-center '
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>Quality.</p>
            <p>Style.</p>
            <p>Convenience</p>
            {/* <p className='text-7xl lg:text-9xl'>Vilange</p> */}
            {/* <p className='text-7xl lg:text-9xl'>Store</p> */}
            {/* <p className='text-muted-foreground block text-5xl'>Awaits</p> */}
          </motion.h1>
          {/* <motion.p
            className='text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 h-12 sm:h-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Background lights are cool you know.
          </motion.p> */}
        </div>
        {/* <div className='font-extralight text-base md:text-4xl dark:text-neutral-200 py-4'>
          And this, is chemical burn.
        </div> */}
        <motion.div
          className='flex flex-col  sm:flex-row w-full gap-4 lg:hidden'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href='#'
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'h-11 rounded-full justify-between shadow-none   text-muted-foreground outline-none hover:bg-white  bg-gray-50 border-[0.1px] border-gray-300'
            )}
          >
            <p>Search for items...</p>
            <Search className='' />
          </Link>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
