import { useEffect, useState } from "react";
import { getContacts } from "../api";
import { useAppContext } from "../context/appContext";
import ContactUsAdminCard from "../components/Card/ContactUsAdminCard";

import "./ContactUsAdmin.css";

const ContactUsAdmin = () => {
  const [fetchContactUs, setFetchContactUs] = useState([]);
  const { error, handleError } = useAppContext();

  useEffect(() => {
    const getAllContactUs = async () => {
      try {
        const { data } = await getContacts();
        setFetchContactUs(data);
        // console.log(data);
        handleError("");
      } catch (error) {
        // console.log(error.response.data);
        handleError(error.response.data);
      }
    };
    getAllContactUs();
  }, []);

  return (
    <div className="contactUsAdmin my-5">
      <h1>Contact Us</h1>
      {error && <p className="text-danger">{error}</p>}
      <div className="contactUsAdminDetail">
        {fetchContactUs &&
          fetchContactUs.map((data) => (
            <ContactUsAdminCard key={data.id} {...data} />
          ))}
      </div>
    </div>
  );
};

export default ContactUsAdmin;
