import React, { useState,useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import DisplayCookies from '../../component/Navigationbar/direct';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['id', 'password']);
    const [isOpen, setIsOpen] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/log?id=${id}&password=${password}`);
            console.log(response.data);
            if ((response.data !== 'Invalid password for user')&&(response.data !== 'User not found for ID')) {
                setCookie('id', id);
                setCookie('password', password);
            }
            else {
                removeCookie('id');
                removeCookie('password');
            }
            if(response.data == 'User not found for ID'){
                removeCookie('id');
                removeCookie('password');
            }
            console.log('Cookies:', cookies);
        } catch (error) {
            console.error('Error:', error);
            
        }
    }

    const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timer;
    if (redirect) {
      // Set up the timer for redirection
      timer = setTimeout(() => {
        // This can be changed to any URL or route you manage in your React app
        window.location.href = '/home';
      }, 1500);
    }

    // Clean up the timer if the component is unmounted before the timeout completes
    return () => clearTimeout(timer);
  }, [redirect]);

    return (
        <div className='wrapper'>
            <h2>Login </h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                <label className='input-box'>
                    <td>User Name:</td>
                    <td>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                    </td>
                </label>
                </tr>
                <tr>
                <label className='input-box box2'>
                    <td>Password:</td>
                    <td>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </td>
                </label>
                </tr>
                </table>
                <br />
                
                <button type="submit" onClick={() => setRedirect(true)}>Login</button>   
                
                <p className="register-link">Don't have an account? <a href='/register'>Register</a></p>        
            </form>
 
        </div>
    );
}



export default LoginForm;
