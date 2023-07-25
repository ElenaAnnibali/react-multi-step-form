import PropTypes from 'prop-types';

export default function PlanSelection({
  updatePlan,
  goToNextStep,
  goToPreviousStep,
}) {
  const handlePlan = () => {
    updatePlan();
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
      <div className="step-one-card step-two-card">
        <h1>Select your plan</h1>
        <p className="paragraph-please">
          You have the option of monthly or yearly billing.
        </p>
        <div className="plan-container">
          <div className="plan-option" onClick={handlePlan}>
            <img
              src="/images/icon-arcade.svg"
              alt="arcade icon"
              className="icon"
            />
            <div className="plan-type-wrapper">
              <h4>Arcade</h4>
              <p className="cost">$9/mo</p>
            </div>
          </div>
          <div className="plan-option">
            <img
              src="/images/icon-advanced.svg"
              alt="advanced icon"
              className="icon"
            />
            <div className="plan-type-wrapper">
              <h4>Advanced</h4>
              <p className="cost">$12/mo</p>
            </div>
          </div>
          <div className="plan-option">
            <img src="/images/icon-pro.svg" alt="pro icon" className="icon" />
            <div className="plan-type-wrapper">
              <h4>Pro</h4>
              <p className="cost">$15/mo</p>
            </div>
          </div>
          <div className="toggle-monthly-yearly-container">
            <p className="monthly">Monthly</p>
            <div className="toggle-container">
              <input type="checkbox" id="switch" />
              <label className="toggle" htmlFor="switch">
                Toggle
              </label>
            </div>
            <p className="yearly">Yearly</p>
          </div>
        </div>
      </div>
      <div className="btn-container btn-container-step-two">
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

PlanSelection.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  updatePlan: PropTypes.func.isRequired,
  goToNextStep: PropTypes.func.isRequired,
  goToPreviousStep: PropTypes.func.isRequired,
};
