import { FiMessageCircle, FiSend } from 'react-icons/fi';
import { BsFillStarFill, BsStar } from 'react-icons/bs';

const ReviewsPage = ({ reviews, onHideReview, newReviewText, setNewReviewText, newReviewRating, setRating, onAddReview }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Client feedback</div>
    <h2 className="text-xl font-medium text-gray-900 mb-1">Reviews</h2>
    <p className="text-gray-600 text-sm mb-6">Advanced and premium subscribers can comment. Admin can hide irrelevant reviews.</p>
    
    <div className="space-y-4 max-w-2xl">
      {reviews.filter(r => r.visible).map(review => (
        <div key={review.id} className="flex gap-3 pb-4 border-b border-gray-200">
          <div className="w-8 h-8 rounded-full bg-[#B5D4F4] flex items-center justify-center text-xs font-medium text-[#0C447C]">{review.avatar}</div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{review.name} <span className="text-yellow-500 text-xs inline-flex gap-0.5">{Array(review.stars).fill().map((_, i) => <BsFillStarFill key={i} size={10} />)}{Array(5-review.stars).fill().map((_, i) => <BsStar key={i} size={10} />)}</span></div>
            <div className="text-sm text-gray-600 mt-1">{review.text}</div>
            <button onClick={() => onHideReview(review.id)} className="text-xs text-gray-400 underline mt-1">Hide review</button>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 bg-gray-50 rounded-lg p-5 max-w-md">
      <div className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2"><FiMessageCircle size={14} /> Leave a review</div>
      <div className="flex gap-1 text-2xl text-[#D3D1C7] cursor-pointer mb-3" id="stars">
        {[1,2,3,4,5].map(star => (
          <span key={star} onClick={() => setRating(star)}>★</span>
        ))}
      </div>
      <textarea 
        value={newReviewText}
        onChange={(e) => setNewReviewText(e.target.value)}
        placeholder="Share your experience..." 
        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-y min-h-[80px] bg-white"
      />
      <button onClick={onAddReview} className="bg-[#185FA5] text-white px-5 py-2 rounded-md text-sm font-medium mt-3 flex items-center gap-2"><FiSend size={14} /> Submit review</button>
    </div>
  </div>
);

export default ReviewsPage;