import PropTypes from 'prop-types';

export default function Summary({ goToNextStep, goToPreviousStep }) {
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
        <h1>Finishing up</h1>
        <p className="paragraph-please">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="btn-container btn-container-step-two btn-container-step-three">
        <p className="go-back" onClick={handlePrevious}>
          Go Back
        </p>
        <button className="next-step-btn btn-step-two" onClick={handleNext}>
          Confirm
        </button>
      </div>
    </div>
  );
}

Summary.propTypes = {
  goToNextStep: PropTypes.func.isRequired,
  goToPreviousStep: PropTypes.func.isRequired,
};
