import React, { useState } from 'react';
import axios from 'axios';

const SaveCardForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        cardName: '',
        cardNumber: '',
        exDate: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v3/card/saveCard', formData);
            console.log('Card saved successfully:', response.data);
            // Optionally, you can redirect the user or show a success message here
        } catch (error) {
            console.error('Error saving card:', error);
            // Handle error (e.g., show error message to the user)
        }
    };

    return (
        <div>
            <h2>Save Card</h2>
            <form onSubmit={handleSubmit}>
                
                    <label>Username:</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
                
                    <label>Card Name:</label>
                    <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} />
                
                    <label>Card Number:</label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
                
                    <label>Expiration Date:</label>
                    <input type="text" name="exDate" value={formData.exDate} onChange={handleChange} />
                
                    <label>CVC:</label>
                    <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} />
                
                <button type="submit">Save Card</button>
            </form>
        </div>
    );
};

export default SaveCardForm;
