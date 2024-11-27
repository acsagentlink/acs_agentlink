import { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import OtpVerificationForm from "./OtpVerificationForm";
import NewPasswordForm from "./NewPasswordForm";
import SuccessPage from "./SuccessPage";

export default function ForgotPasswordFlow() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [email, setEmail] = useState(""); // Stores the entered email
  const [resetToken, setResetToken] = useState(""); 

  return (
    <div className="container">
      {step === 1 && (
        <ForgotPasswordForm
          onNext={(email) => {
            setEmail(email);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <OtpVerificationForm
          email={email}
          onVerify={(resetToken) => {
            setResetToken(resetToken);
            setStep(3);

          }}
        />
      )}
      {step === 3 && (
        <NewPasswordForm
          email={email}
          resetToken={resetToken}
          onSubmit={() => setStep(4)}
        />
      )}
      {step === 4 && <SuccessPage />}
    </div>
  );
}
