import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

import "./PaymentForm.css";
const PaymentForm = () => {
  const navigate = useNavigate();
  const [paymentFinished, setPaymentFinished] = useState(false);

  const { paymentDone, handleChange, handleError, error } = useAppContext();

  const paymentCompletionHandler = async (e) => {
    setPaymentFinished(true);
    handleChange({ name: "paymentDone", value: true });
  };
  if (paymentFinished) {
    setTimeout(() => {
      // Redirect
      navigate("/profile-page");
    }, 2000);
  }
  const initialOptions = {
    "client-id":
      "AeFLgprSIbIVkrER2O8bWwBMwHm-64n1_acr5gu9xllgxBC9wHtrSgCWrtVvn4-3AMBrqiET6J3RIgGG",
    currency: "USD",
    intent: "capture",
  };
  return (
    <Fragment>
      {/* We just use PayPal payment method */}
      <div className="text-center m-5">
        {" "}
        <PayPalScriptProvider
          options={initialOptions}
          onApprove={paymentCompletionHandler}
        >
          <PayPalButtons style={{ layout: "vertical" }} />
        </PayPalScriptProvider>
        {paymentFinished && (
          <h3 className="text-center text-info  ">Payment Completed</h3>
        )}
      </div>
    </Fragment>
  );
};
export default PaymentForm;
