import './App.css';
import { useState } from 'react';
import AddOns from './components/AddOns';
import Confirmation from './components/Confirmation';
import PersonalInfo from './components/PersonalInfo';
import PlanSelection from './components/PlanSelection';
import Summary from './components/Summary';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    billing: '',
    addons: [],
  });

  const updateName = (value) => {
    setFormData((prevData) => ({ ...prevData, name: value }));
  };

  const updateEmail = (value) => {
    setFormData((prevData) => ({ ...prevData, email: value }));
  };

  const updatePhone = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };

  const updatePlan = (value) => {
    setFormData((prevData) => ({ ...prevData, plan: value }));
  };

  const updateBilling = (value) => {
    setFormData((prevData) => ({ ...prevData, billing: value }));
  };

  // const updateAddons = (value) => {
  //   setFormData((prevData) => ({ ...prevData, addons: value }));
  // };

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <PersonalInfo
          formData={formData}
          updateName={updateName}
          updateEmail={updateEmail}
          updatePhone={updatePhone}
          goToNextStep={goToNextStep}
        />
      )}
      {currentStep === 2 && (
        <PlanSelection
          formData={formData}
          updatePlan={updatePlan}
          updateBilling={updateBilling}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {currentStep === 3 && (
        <AddOns
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {currentStep === 4 && (
        <Summary
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      )}
      {currentStep === 5 && <Confirmation />}
    </div>
  );
}

export default App;
