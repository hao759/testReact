import { useState } from "react";
import CountDown from "./CountDown";
import "./genotp.scss";

const GenOTP = () => {
  const handleGenOPT = () => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    setorg(otp);
  };
  const [org, setorg] = useState("");

  return (
    <div className="main">
      <div className="label">Your OTP: {org}</div>
      <button className="button" onClick={() => handleGenOPT()}>
        Generate OTP
      </button>
      <div>
        <CountDown />
      </div>
    </div>
  );
};
export default GenOTP;
