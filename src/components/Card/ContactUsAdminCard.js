import "./ContactUsAdminCard.css";

const ContactUsAdminCard = ({
  id,
  name,
  email,
  phoneNumber,
  topic,
  message,
}) => {
  return (
    <div className="contactUs my-4">
      <div>
        <h6>Name : {name}</h6>
        <p>Email Address : {email}</p>
        <h6>Topic : {topic}</h6>
      </div>
      {/* <div>{message}</div> */}
      <div>{message}</div>
    </div>
  );
};

export default ContactUsAdminCard;
