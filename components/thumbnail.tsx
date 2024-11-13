'use client';

import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { CldImage } from 'next-cloudinary';
interface Props {
  imgUrl: string;
  imgAlt: string;
  className?: string;
}

const Thumbnail = ({ imgUrl, imgAlt, className }: Props) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <CldImage
        src={imgUrl}
        sizes='(max-width: 600px) 50vw, (max-width: 1200px) 30vw, 20vw'
        alt={imgAlt}
        crop='fill'
        fill
        priority
        className={cn('object-cover', className)}
      />
    </AspectRatio>
  );
};
export default Thumbnail;
