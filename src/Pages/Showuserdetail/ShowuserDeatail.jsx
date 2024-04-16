import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './ShowuserDetail.css'
import { Button } from '@mui/material';

function UserDetail() {
  const [cookies] = useCookies(['id', 'password']);
  const [user, setUser] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cookies.id) {
      getUserById(cookies.id);
    }
  }, [cookies.id]);

  const getUserById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/user/all/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      const userData = await response.json();
      setUser(userData);
      const { weight, height } = userData; // Destructure weight and height from userData
      setWeight(weight); // Assuming setWeightData and setHeightData are setter functions for weightData and heightData
      setHeight(height);


    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  const postData = async () => {
    const response = await fetch('http://localhost:5000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ weight, height })
    });

    const data = await response.json();
    setTotal(data.total);
  };



  return (
    <div>
      

      {user && (
        <div className='userdetailbody' >
          <table>
          <tr><td className='usededes'> Username:</td> <td className='usedeload form-control' >{user.userName}</td></tr>
          <tr><td className='usededes'>First Name:</td><td className='usedeload form-control'> {user.firstName}</td></tr>
          <tr><td className='usededes'>Last Name:</td> <td className='usedeload form-control'>{user.lastName}</td></tr>
          <tr><td className='usededes'>Email:</td> <td className='usedeload form-control'>{user.email}</td></tr>
          {/* Display existing user data */}
          
          {/* Add input fields for weight and height */}
          <tr><td className='usededes'>Weight:</td><br/><input type="number" value={user.weight} onChange={(e) => setWeight(parseInt(e.target.value))} className='form-control' /></tr>
          <tr><td className='usededes'>Height:</td><br/> <input type="number" value={user.height} onChange={(e) => setHeight(parseInt(e.target.value))} className='form-control' /><br/></tr>
          <tr><td><Button onClick={postData} className="search-btn" sx={{ bgcolor: 'blue', color: 'black', textTransform: 'none', width: { lg: '173px', xs: '100px' }, height: '70px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },position:'relative',right:'5%' }} >Calculate Total Body Fat</Button></td>
      <td>{total !== 0 && <p>Body Fat: {total}</p>}</td></tr>
          </table>
          
          
      
      <a href='http://localhost:3000/update'>
        <Button  className="search-btn" sx={{ bgcolor: 'Green', color: 'black', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },position:'fixed',right:'5%' }} >Update user</Button>
      </a>
      <Button  className="search-btn" sx={{ bgcolor: 'red', color: 'black', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },position:'fixed',left:'5%' }} >Delete user</Button>
        </div>
      )}
    
    </div>
    
  );
}

export default UserDetail;
