import React from "react";
import MdStar from "react-icons/lib/md/star";

/**
 * Helper function to create the five start rating.
 * @params rating The number of stars to be filled
 */
const createStars = (rating) => {
    let stars = [];
    let redFill = "#c00";
    for(let i=0 ;i < 5; i++) {
        let fill = "#6f7477";
        if(rating > i) {
            fill = redFill;
        }
        stars.push(<span key={i} className="overall-stars"><MdStar fill={ fill } /></span>);
    }
    return stars;
}

export const ProductReview = ({ positiveComment, negativeComment, conOverallRating, conTitle, conReviewCreator , conPostedDate , proPostedDate, proReviewCreator, proOverallRating, proTitle, totalReviews }) => (
    <div className="product-review">
        <div className="all-review flex-container flex-justify-content-space-between">
            <span className="overall-general-rating">{ [...createStars(5)] } overall</span>
            <span className="view-all-review"><strong>View all {totalReviews} reviews</strong></span>
        </div>
        <div className="most-helpful-reviews">
            <div className="most-helpful-reviews-hdr">
                <div className="pro-comment-header flex-container flex-direction-column">
                    <strong>PRO</strong>
                    <span className="most-helpful-reviews-label">most helpful 4-5 star review</span>
                </div>
                <div className="con-comment-header flex-container flex-direction-column">
                    <strong>CON</strong>
                    <span className="most-helpful-reviews-label">most helpful 1-2 star review</span>
                </div>
            </div>
            <div className="most-helpful-reviews-body">
                <div className="pro-comment-body flex-container flex-direction-column ">
                    <span className="comment-rating">{ createStars(proOverallRating) }</span>
                    <span className="comment-title"><strong>{proTitle}</strong></span>
                    <span className="detailed-comment">
                        { positiveComment }
                    </span>
                    <div className="review-creation-details">
                        <a href="#" className="review-creator">{proReviewCreator}</a>
                        <span className="review-posted-date">{proPostedDate}</span>
                    </div>
                </div>
                <div className="con-comment-body flex-container flex-direction-column">
                    <span className="comment-rating">{ createStars(conOverallRating) }</span>
                    <span className="comment-title"> <strong>{ conTitle }</strong></span>
                    <span className="detailed-comment">
                        { negativeComment }
                    </span>
                    <div className="review-creation-details">
                        <a href="#" className="review-creator">{conReviewCreator}</a>
                        <span className="review-posted-date">{conPostedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
