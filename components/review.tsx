import { formatNumber } from './number-formatter';
import ReviewIcon from './review-icon';

interface ProductReviewProps {
  averageReview: number;
  totalReviews: number;
  iconSize?: number;
}

const Reviews = ({
  averageReview,
  totalReviews,
  iconSize,
}: ProductReviewProps) => {
  return (
    <div className='flex items-center space-x-1 cursor-pointer hover:underline'>
      <ReviewIcon averageReview={averageReview} size={iconSize} />
      <p className='text-xs'>({formatNumber(totalReviews)})</p>
    </div>
  );
};

export default Reviews;
