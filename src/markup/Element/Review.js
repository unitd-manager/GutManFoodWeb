import React, { useState } from "react";
import toast from "react-hot-toast";
import { getUser } from "../../common/user";
import { useParams } from "react-router-dom";
import api from "../../constants/api";
import StarRating from "./Rating";

function Review() {
  const { id } = useParams();
  const user = getUser();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log("rating", newRating);
  };

  const [addNoteData, setAddNoteData] = useState({
    rating: 0,
    comments: "",
    room_name: "product",
    record_id: id,
  });

  const handleData = (e) => {
    setAddNoteData({ ...addNoteData, [e.target.name]: e.target.value });
  };

  const SubmitNote = (e) => {
    e.preventDefault();
    addNoteData.contact_id = user.contact_id;
    addNoteData.rating = rating;
    addNoteData.creation_date = new Date();
    api
      .post("/comment/insertComment", addNoteData)
      .then(() => {
        toast.success("Comments added successfully");
      })
      .catch((err) => {
        toast.error("Error adding comment");
      });
  };

  // Inline styles for a modern card container
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "2rem",
    maxWidth: "500px",
    margin: "2rem auto",
  };

  // Inline styles for header text
  const headerStyle = {
    fontSize: "1.75rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#333",
  };

  // Inline styles for textarea
  const textareaStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    marginBottom: "1rem",
    resize: "vertical",
  };

  // Inline styles for submit button
  const buttonStyle = {
    backgroundColor: "#10B981",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div style={cardStyle}>
        <h3 style={headerStyle}>Add a Review</h3>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          Your email address will not be published. Required fields are marked *
        </p>
        {/* Star Rating Section */}
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <span
            style={{
              marginRight: "1rem",
              fontSize: "1.1rem",
              color: "#333",
            }}
          >
            Your Rating:
          </span>
          <StarRating
            rating={rating}
            setRating={setRating}
            handleRatingChange={handleRatingChange}
            handleData={handleData}
          />
        </div>
        <form onSubmit={SubmitNote}>
          <textarea
            name="comments"
            placeholder="Message"
            value={addNoteData.comments}
            onChange={handleData}
            style={textareaStyle}
          />
          <input type="submit" value="Submit" className="btn btnhover" 
        //   style={buttonStyle}
           />
        </form>
      </div>
    </div>
  );
}

export default Review;
