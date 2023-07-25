// import { useState } from 'react';

export default function Confirmation() {
  return (
    <div className="form-container form-container-step-two">
      <div className="steps">
        <div className="circle">
          <p className="step-number">1</p>
        </div>
        <div className="circle">
          <p className="step-number">2</p>
        </div>
        <div className="circle">
          <p className="step-number">3</p>
        </div>
        <div className="circle">
          <p className="step-number">4</p>
        </div>
      </div>
      <div className="step-one-card step-two-card step-three-card thank-you-card">
        <img
          src="/images/icon-thank-you.svg"
          alt="thank you icon"
          className="thank-you-icon"
        />
        <h1 className="thank-you-h1">Thank you!</h1>
        <p className="paragraph-please thank-you-paragraph">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
