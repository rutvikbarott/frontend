import React, { useState } from 'react';

const VotingEligibility = () => {

  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h1>Check Voting Eligibility</h1>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleAgeChange}
      />
      <div>
        {age >= 18 && age !== '' ? (
          <p>You are eligible to vote.</p>
        ) : age !== '' ? (
          <p>You are not eligible to vote.</p>
        ) : (
          <p>Please enter your age.</p>
        )}
      </div>
    </div>
  );
};

export default VotingEligibility;
