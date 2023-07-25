import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AddOns({ goToNextStep, goToPreviousStep }) {
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [isTwoChecked, setIsTwoChecked] = useState(false);
  const [isThreeChecked, setIsThreeChecked] = useState(false);

  const handleCheckboxOneChange = () => {
    setIsOneChecked(!isOneChecked);
  };

  const handleCheckboxTwoChange = () => {
    setIsTwoChecked(!isTwoChecked);
  };

  const handleCheckboxThreeChange = () => {
    setIsThreeChecked(!isThreeChecked);
  };

  const handleNext = () => {
    goToNextStep();
  };
  const handlePrevious = () => {
    goToPreviousStep();
  };

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
      <div className="step-one-card step-two-card step-three-card">
        <h1>Pick add-ons</h1>
        <p className="paragraph-please">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="add-ons-container">
          <div className={`add-on ${isOneChecked ? 'selected' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              id="online-service"
              checked={isOneChecked}
              onChange={handleCheckboxOneChange}
            />
            <div className="add-ons-p">
              <p>Online service</p>
              <p className="sub-p">Acccess to multiplayer games</p>
            </div>
            <p className="add-on-price">+$1/mo</p>
          </div>
          <div className={`add-on ${isTwoChecked ? 'selected' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              id="online-service"
              checked={isTwoChecked}
              onChange={handleCheckboxTwoChange}
            />
            <div className="add-ons-p">
              <p>Lager storage</p>
              <p className="sub-p">Extra 1TB of cloud save</p>
            </div>
            <p className="add-on-price">+$2/mo</p>
          </div>
          <div className={`add-on ${isThreeChecked ? 'selected' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              id="customizable-profile"
              checked={isThreeChecked}
              onChange={handleCheckboxThreeChange}
            />
            <div className="add-ons-p">
              <p>Customizable profile</p>
              <p className="sub-p">Custom theme on your profile</p>
            </div>
            <p className="add-on-price">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="btn-container btn-container-step-two btn-container-step-three">
        <p className="go-back" onClick={handlePrevious}>
          Go Back
        </p>
        <button className="next-step-btn btn-step-two" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

AddOns.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
  goToPreviousStep: PropTypes.func.isRequired,
};
