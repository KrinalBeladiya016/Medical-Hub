import React, { useState } from 'react';
import Signup from './Signup';
import UserForm from './UserForm';

function GetID() {
  const [step, setStep] = useState(1); // 1 for signup, 2 for full form
  const [userData, setUserData] = useState({});

  const handleSignupSuccess = (data) => {
    setUserData(data);
    setStep(2); // Move to the full form
  };

  return (
    <div>
      {step === 1 && <Signup onSignupComplete={handleSignupSuccess} />}
      {step === 2 && <UserForm userData={userData} />}
    </div>
  );
}

export default GetID;
