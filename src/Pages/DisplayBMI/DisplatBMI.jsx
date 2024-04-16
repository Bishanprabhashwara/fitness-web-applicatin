import React, { useState } from 'react';

const MyComponent = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/user_info?userName=${userName}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          placeholder="Enter userName" 
        />
        <button type="submit">Get User Data</button>
      </form>

      {userData && (
        <div>
          <p>Height: {userData.height}</p>
          <p>Weight: {userData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
