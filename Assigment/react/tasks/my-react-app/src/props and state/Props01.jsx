import React from 'react';

// UserCard component accepts name, age, and location as props
function UserCard({ name, age, location }) {
  return (
    <div style={cardStyle}>
      <h2>User Card</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

// Inline style for card appearance
const cardStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  width: '250px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: 'lightpink',
};

function Props01() {
  return (
    <div className="App">
      <h1>User Information</h1>
      <div style={{ display: 'flex' }}>
        <UserCard name="Rutvik" age={20} location="Ahemedabad" />
        <UserCard name="Uju" age={20} location="Bayad" />
      </div>
    </div>
  );
}

export default Props01;
