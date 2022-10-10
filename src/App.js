import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counselors from "./pages/Counselors";
import Contact from "./pages/Contact";
import ContactUsAdmin from "./pages/ContactUsAdmin";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import AdminAuth from "./pages/AdminAuth";
import CounselorForm from "./components/Form/CounselorForm";
import AppointmentForm from "./components/Form/AppointmentForm";
import PaymentForm from "./components/Form/PaymentForm";
import Services from "./pages/Services";
import { useAppContext } from "./context/appContext";
import ProfilePage from "./pages/ProfilePage";
import VideoMeeting from "./pages/VideoMeeting";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isLoggedIn, isAdmin } = useAppContext();
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counselors" element={<Counselors />} />
        <Route path="/counselor-form" element={<CounselorForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />

        {/* If Not Authenticated  then move to Auth form*/}
        {!isLoggedIn && <Route path="/auth" element={<Auth />} />}
        {!isLoggedIn && <Route path="/admin-auth" element={<AdminAuth />} />}
        {!isLoggedIn && <Route path="/appointment-form" element={<Auth />} />}
        {!isLoggedIn && <Route path="/profile-page" element={<Auth />} />}
        {!isLoggedIn && <Route path="/payment-form" element={<Auth />} />}
        {!isLoggedIn && <Route path="/video-meeting" element={<Auth />} />}

        {/* If Authenticated I mean Protected Routes*/}
        {isLoggedIn && <Route path="/auth" element={<Home />} />}
        {isAdmin && isLoggedIn && (
          <Route path="/admin-auth" element={<Dashboard />} />
        )}
        {isAdmin && isLoggedIn && (
          <Route path="/contactUsAdmin" element={<ContactUsAdmin />} />
        )}

        {isLoggedIn && (
          <Route path="/appointment-form" element={<AppointmentForm />} />
        )}
        {isLoggedIn && <Route path="/payment-form" element={<PaymentForm />} />}
        {isLoggedIn && !isAdmin && (
          <Route path="/profile-page" element={<ProfilePage />} />
        )}
        {isLoggedIn && (
          <Route path="/video-meeting" element={<VideoMeeting />} />
        )}
      </Routes>
    </Fragment>
  );
}

export default App;
