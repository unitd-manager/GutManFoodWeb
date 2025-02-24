import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, handleRatingChange }) => {
  // This function determines whether to set a half-star or full-star based on the click position.
  const handleStarClick = (index, event) => {
    const { offsetX, target } = event.nativeEvent;
    const width = target.offsetWidth;
    const newRating = index + (offsetX < width / 2 ? 0.5 : 1);
    handleRatingChange(newRating);
  };

  return (
    <div className="stars">
      {[...Array(5)].map((_, index) => {
        let iconClass = "fa-star-o"; // empty star by default

        if (rating >= index + 1) {
          iconClass = "fa-star"; // full star
        } else if (rating >= index + 0.5) {
          iconClass = "fa-star-half-o"; // half star
        }
        
        return (
          <span
            key={index}
            onClick={(e) => handleStarClick(index, e)}
            style={{
              cursor: "pointer",
              color: "#facc15", // gold color
              fontSize: "24px",
              marginRight: "4px",
            }}
          >
            <i className={`fa ${iconClass}`}></i>
          </span>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export default StarRating;
