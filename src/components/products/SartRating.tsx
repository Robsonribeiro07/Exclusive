import { Star } from 'lucide-react'

interface StarRatingProps {
  totalReviews: number
  positiveReviews: number
  maxStars?: number
}

export function StarRating({
  totalReviews,
  positiveReviews,
  maxStars = 5,
}: StarRatingProps) {
  const rating =
    totalReviews > 0 ? (positiveReviews / totalReviews) * maxStars : 0

  return (
    <div className="flex">
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1
        return (
          <Star
            key={index}
            data-testid={`star-${index}`}
            className={`w-6 h-6 ${
              rating >= starValue
                ? 'fill-yellow-400 text-yellow-400'
                : rating >= starValue - 0.5
                  ? 'fill-yellow-300 text-yellow-300'
                  : 'text-gray-400'
            }`}
          />
        )
      })}
    </div>
  )
}
