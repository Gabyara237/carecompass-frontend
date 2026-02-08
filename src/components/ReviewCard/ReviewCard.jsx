
import React from 'react';

import RatingIcon from '../icons/RatingIcon'
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon'

const ReviewCard = ({ review, currentUserId, onEdit, onDelete })=> {
  const isOwner = currentUserId && review.user?._id ===currentUserId;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">
              {review.user?.username?.charAt(0).toUpperCase() || 'A'}
            </span>
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-gray-900">
              {review.user?.username ||'Anonymous'}
            </p>
            <p className="text-sm text-gray-500">
              {formatDate(review.createdAt)}
            </p>
          </div>
        </div>

        <div className="mt-2 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <RatingIcon
              key={i}
              index={i}
              rating={review.rating}
            />
          ))}
          <span className="text-sm font-semibold text-gray-600 ml-1">
            {review.rating}
          </span>
        </div>

      </div>


      {review.comment && (
        <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
      )}

      {isOwner && (
        <div className="flex items-center space-x-3 mt-3">
          <button
            onClick={() => onEdit(review)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
          >
            <EditIcon/>
            <span>Edit</span>
          </button>
          <button
            onClick={() => onDelete(review._id)}
            className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center space-x-1"
          >
            <DeleteIcon/>
            <span>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;