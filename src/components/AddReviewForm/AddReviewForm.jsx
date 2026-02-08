
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import RatingIcon from '../icons/RatingIcon';

const AddReviewForm =({clinicId,onReviewAdded,existingReview})=> {

  const {user} =useContext(UserContext);

  const [rating, setRating] = useState(existingReview?.rating || 0);
  const [hoveredRating,setHoveredRating] = useState(0);
  const [comment, setComment] =useState(existingReview?.comment || '');
  const [loading, setLoading] =useState(false);
  const [error, setError] =useState(null);

  const API_BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

  const isEditing = !!existingReview;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('token');
      
      if (isEditing) {

        await axios.put(
          `${API_BASE_URL}/clinics/${clinicId}/reviews/${existingReview._id}`,
          { rating, comment },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      } else {
        await axios.post(
          `${API_BASE_URL}/clinics/${clinicId}/reviews`,
          { rating, comment },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      }
      
      if (!isEditing) {
        setRating(0);
        setComment('');
      }

      if (onReviewAdded) onReviewAdded();
      
    } catch (error) {
      console.error('Error:', error);
      setError('Error submitting review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
        
        <p className="text-blue-900 font-semibold mb-2">Sign in to leave a review</p>
        <p className="text-blue-700 text-sm mb-4">Share your experience with this clinic</p>
        <Link to="/sign-in" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Sign In
        </Link>

      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {isEditing ? 'Edit Your Review' : 'Write a Review'}
      </h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star, index) => (
                    <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                    >
                    <RatingIcon
                        index={index}
                        rating={hoveredRating || rating}
                    />
                    </button>
                ))}
            </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Review (Optional)
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this clinic... What did you like? What could be improved?"
            rows={5}
            maxLength={500}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-gray-500">
              {comment.length}/500 characters
            </p>
            {comment.length > 450 && (
              <p className="text-xs text-orange-600 font-medium">
                {500 - comment.length} characters left
              </p>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={loading || rating === 0}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
              loading || rating === 0 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-[#4267B2] hover:bg-[#365899] text-white shadow-md'}`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>{isEditing ? 'Update' : 'Submit'}</span>
              </>
            )}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={() => onReviewAdded()}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;