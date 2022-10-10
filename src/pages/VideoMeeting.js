import axios from "axios";

import { Fragment, useEffect, useState } from "react";
import ReviewForm from "../components/Form/ReviewForm";
import { useAppContext } from "../context/appContext";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../api";

const VideoMeeting = () => {
  const [meetingId, setMeetingId] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { type, meetingEmail, counseleeName } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getMeetingId = async () => {
      const { data } = await axios(
        "http://telecounseling.somee.com/api/CallControl"
      );
      setMeetingId(data);
    };
    getMeetingId();
  }, []);
  if (meetingId) {
    const meetingData = {
      counsellorEmail: meetingEmail,
      subject: "Counsultaion Meeting",
      message: `Today is your Counsultation meeting with : ${counseleeName}. click on link to start.`,
    };
    console.log(meetingData);
    const sendMeetingIdToCounselee = async () => {
      try {
        const { data } = await sendEmail(
          `Email/SendEmail?toEmail=${meetingData.counsellorEmail}&subject=${meetingData.subject}&message=${meetingData.message}`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    // sendMeetingIdToCounselee();
  }
  const closeMeetingHandler = async (e) => {
    e.preventDefault();
    if (type === "Counselee") {
      setShowReviewForm(!showReviewForm);
    } else {
      setShowReviewForm(showReviewForm);
      navigate("/profile-page");
    }
  };

  return (
    <Fragment>
      {showReviewForm && <ReviewForm counsellor_Id={"173"} rating_By={"105"} />}
      <div
        style={{
          margin: "20px auto",
          width: "60vw",
          height: "100vh",
        }}
      >
        <iframe
          allow="camera; microphone; fullscreen; display-capture; autoplay"
          src={meetingId}
          style={{ border: "0px", width: "100%", height: "90%" }}
          title="Join Meeting"
        ></iframe>
        <Button
          style={{ backgroundColor: "skyblue", color: "white" }}
          onClick={closeMeetingHandler}
        >
          Close Meeting
        </Button>
      </div>
    </Fragment>
  );
};

export default VideoMeeting;
