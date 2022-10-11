import OtpInput from "react-otp-input";
import { useState } from "react";

const InputOTP = () => {
  const [otp, setotp] = useState("");
  const handleChange = (otp) => setotp(otp); //ko co {}
  return (
    <div className="input">
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    </div>
  );
};

export default InputOTP;
