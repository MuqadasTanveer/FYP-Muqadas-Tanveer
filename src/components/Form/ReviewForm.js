import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { postRating } from "../../api";
import FormRow from "./FormRow/FormRow";
import "./ReviewForm.css";

const ReviewForm = ({ counsellor_Id, rating_By }) => {
  const navigate = useNavigate();
  // console.log(id);
  const reviewFormHandler = async (e) => {
    e.preventDefault();
    const rating = e.target[0].value;
    // console.log(rating);

    const rankingData = {
      counsellor_Id,
      rating,
      rating_By,
    };
    console.log(rankingData);

    try {
      const { data } = await postRating(rankingData);
      console.log(data);
      navigate("/profile-page");
    } catch (error) {
      console.log(error);
    }
  };
  const skipReview = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className="reviewFormContainer">
        <form className="reviewForm" onSubmit={reviewFormHandler}>
          <h4 style={{ color: "skyBlue" }}>
            Give rating to that that Counselor
          </h4>

          <FormRow
            label="Ranking (1-5)"
            type="number"
            min="1"
            max="5"
            placeholder="Select number form 1-5"
          />
          <button type="submit" className="reviewSubmit mt-2">
            Submit
          </button>
          <span className="ms-2" onClick={skipReview}>
            Skip
          </span>
        </form>
      </div>
    </Fragment>
  );
};
export default ReviewForm;
