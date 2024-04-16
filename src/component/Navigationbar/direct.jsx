import React from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

const DisplayCookies = () => {
    const [cookies] = useCookies(['id', 'password']);
    let cooky = useParams();

    return (
        <div>
            <h2>Display Cookies</h2>
            <p>ID: {cookies.id}</p>
            <p>Password: {cookies.password}</p>
        </div>
    );
}

export default DisplayCookies;
