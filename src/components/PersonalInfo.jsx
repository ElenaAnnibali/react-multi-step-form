import PropTypes from 'prop-types';

export default function PersonalInfo({
  formData,
  updateName,
  updateEmail,
  updatePhone,
  goToNextStep,
}) {
  const handleNext = () => {
    goToNextStep();
  };

  return (
    <div className="form-container">
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
      <div className="step-one-card">
        <h1>Personal info</h1>
        <p className="paragraph-please">
          Please provide your name, email, address, and phone number.
        </p>
        <label className="labels">Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          value={formData.name}
          onChange={(e) => updateName(e.target.value)}
        />
        <label className="labels">Email Address</label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          value={formData.email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <label className="labels">Phone Number</label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          value={formData.phone}
          onChange={(e) => updatePhone(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button type="button" className="next-step-btn" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
}

PersonalInfo.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  updateName: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePhone: PropTypes.func.isRequired,
  goToNextStep: PropTypes.func.isRequired,
};
