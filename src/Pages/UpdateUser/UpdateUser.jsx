import React, { useState,useEffect } from 'react';
import axios from 'axios';
import'./UpdateUser.css'
import { useCookies } from 'react-cookie';
import { Button } from '@mui/material';



const UpdateUserForm = () => {
  const [user, setUser] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    weight: 0,
    height: 0,
    email: '',
    confirmed: false,
    confirmationToken: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8080/api/v1/user/updateUser', user);
      console.log('User updated:', response.data);
      // Optionally, you can handle success messages or redirection here
    } catch (error) {
      console.error('Error updating user:', error);
      // Optionally, you can handle error messages here
    }
  };

  const [cookies] = useCookies(['id', 'password']);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Retrieve id and password from cookies and update state
    if (cookies.id) {
      setId(cookies.id);
    }
    if (cookies.password) {
      setPassword(cookies.password);
    }
  }, [cookies.id, cookies.password]);


  return (
    <div className='userupdatebody'>
    <form onSubmit={handleSubmit}>
      <table className='updateuser'>
        <tr>
          <td>
          Username:
          </td>
          <td>
          <input type="text" name="userName" value={id} onLoad={handleChange} />
          </td>
          
        </tr>
        <tr>
          <td>
          First Name:
          </td>
          <td>
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          Last Name:
          </td>
          <td>
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          Password:
          </td>
          <td>
          <input type="password" name="password" value={password} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          Weight:
          </td>
          <td>
          <input type="number" name="weight" value={user.weight} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          Height:
          </td>
          <td>
          <input type="number" name="height" value={user.height} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
          Email:
          </td>
          <td>
          <input type="email" name="email" value={user.email} onChange={handleChange} />
          </td>
        </tr>
      
      
      
      <Button type="submit" className='updatebutton' sx={{ bgcolor: 'red', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },position:'relative',right:'5%' }}>Update User</Button>
      </table>
    </form>
    </div>
  );
};

export default UpdateUserForm;
