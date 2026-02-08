
import React, { useState, useContext } from 'react';

import { Link} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import ReviewCard from '../ReviewCard/ReviewCard'
import AddReviewForm from '../AddReviewForm/AddReviewForm';
import RatingIcon from '../icons/RatingIcon'
import PlusIcon from '../icons/PlusIcon';
import MessageIcon from '../icons/MessageIcon'

const ReviewsSection = ({clinic,onReviewsUpdated})=> {
    const {user} =useContext(UserContext);
    const [editingReview,setEditingReview] =useState(null);
    const [showAddForm,setShowAddForm]= useState(false);
    const [error, setError] =useState(null);

    const API_BASE_URL= import.meta.env.VITE_BACK_END_SERVER_URL;

    const userReview= user && clinic.reviews?.find(
        review => review.user?._id ===user._id
    );

    const handleDelete =async (reviewId)=>{
        setError(null);
        if (!window.confirm('Are you sure you want to delete this review?')) {
            return;
        }
        try {
            const token =localStorage.getItem('token');
        await axios.delete(
            `${API_BASE_URL}/clinics/${clinic._id}/reviews/${reviewId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (onReviewsUpdated) onReviewsUpdated();
        } catch (error) {
            console.error('Error:', error);
            setError('Error deleting review.Please try again.');
        }
    };

    const handleEdit =(review)=>{
        setError(null);
        setEditingReview(review);
        setShowAddForm(true);
    };

    const handleReviewAdded =() =>{
        setError(null);
        setShowAddForm(false);
        setEditingReview(null);
        if (onReviewsUpdated) onReviewsUpdated();
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {error &&(
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700">
                {error}
              </div>
            )}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Patient Reviews</h2>

                {clinic.reviews && clinic.reviews.length > 0 &&(
                    <div className="mt-2 flex items-center space-x-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <RatingIcon
                                key={i}
                                index={i}
                                rating={clinic.averageRating}
                                />
                            ))}
                        </div>

                        <span className="text-lg font-semibold text-gray-900">
                            {(clinic.averageRating ?? 0).toFixed(1)}
                        </span>

                        <span className="text-sm text-gray-500">
                            ({clinic.reviews.length} {clinic.reviews.length=== 1 ?'review':'reviews'})
                        </span>
                    </div>
                )}
            </div>


            {user && !userReview && !showAddForm &&(
                <button
                    onClick={() =>setShowAddForm(true)}
                    className="mb-6 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors border-2 border-blue-200 flex items-center justify-center space-x-2"
                >
                    <PlusIcon/>
                    <span>Write a Review</span>
                </button>
            )}

            {showAddForm && (
                <div className="mb-6">
                    <AddReviewForm
                        clinicId={clinic._id}
                        onReviewAdded={handleReviewAdded}
                        existingReview={editingReview}
                    />
                </div>
            )}

            {clinic.reviews && clinic.reviews.length > 0 ? (
                <div className="space-y-6">
                    {clinic.reviews.map((review)=>(
                        <ReviewCard
                            key={review._id}
                            review={review}
                            currentUserId={user?._id}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <MessageIcon/>
                    <p className="text-gray-500 text-lg font-medium mb-2">No reviews yet</p>
                    {(!user)?
    
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                            
                            <p className="text-blue-900 font-semibold mb-2">Sign in to leave a review</p>
                            <p className="text-blue-700 text-sm mb-4">Share your experience with this clinic</p>
                            <Link to="/sign-in" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                                Sign In
                            </Link>

                        </div>: <p className="text-gray-400 text-sm">Be the first to review this clinic</p>

                    }
                    
                </div>
            )}
        </div>
    );
}

export default ReviewsSection;