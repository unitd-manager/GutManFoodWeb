import React from 'react';
import PropTypes from 'prop-types';

const AverageRating = ({ ratings, starSize, color, emptyColor }) => {
  // Calculate the average rating
  const total = ratings.reduce((sum, r) => sum + r.rating, 0);
  const avg = ratings.length ? total / ratings.length : 0;

  // Create an array of 5 stars based on the average rating (supports fractional stars)
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // Calculate fill for the current star (value between 0 and 1)
    const fill = Math.max(0, Math.min(1, avg - i));
    stars.push(
      <div
        key={i}
        style={{
          position: "relative",
          display: "inline-block",
          width: starSize,
          height: starSize,
          marginRight: "2px"
        }}
      >
        {/* Empty star */}
        <i
          className="fa fa-star-o"
          style={{ fontSize: starSize, color: emptyColor }}
        />
        {/* Filled overlay based on the fraction */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${fill * 100}%`,
            height: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          <i
            className="fa fa-star"
            style={{ fontSize: starSize, color: color }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {stars}
      <span
        style={{
          marginLeft: "8px",
          fontSize: starSize * 0.8,
          color: "#555"
        }}
      >
        {avg.toFixed(1)} / 5 ({ratings.length} review{ratings.length !== 1 ? "s" : ""})
      </span>
    </div>
  );
};

AverageRating.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
  starSize: PropTypes.number,
  color: PropTypes.string,
  emptyColor: PropTypes.string
};

AverageRating.defaultProps = {
  starSize: 24,
  color: "#FFD700",     // Golden color for filled stars
  emptyColor: "#ccc"    // Gray for empty stars
};

export default AverageRating;
