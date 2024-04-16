import React, { useState,useEffect } from "react";
import axios from 'axios';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './Payment.css'
import { useCookies } from 'react-cookie';

const CreditCardForm = () => {
  const [Paymentcookies] = useCookies(['option']);
  console.log(Paymentcookies.option);

  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    setToday(formattedDate);
  }, []);

  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v3/card/saveCard', {
        userName: state.name,
        cardName: state.name,
        carNumber: state.number,
        exDate: state.expiry,
        cvc: state.cvc,
      });
      console.log('Card saved successfully:', response.data);
      // Optionally, you can perform further actions upon successful save
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/payment/savePayments', {
        userName: state.name,
        payment:Paymentcookies.option,
        date:today
      });

      console.log('Response:', response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="creditcard">
      <br/><br/><br/><br/>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <br/><br/><br/>
      
      <form onSubmit={{handleSubmit}}>
        <input
          type="number"
          name="number"
          className="form-control"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <br/>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <br/>
        <input
          type="number"
          name="expiry"
          className="form-control"
          placeholder="Valid Thru"
          pattern="\d\d/\d\d"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        /><br/>
        <input
          type="number"
          name="cvc"
          className="form-control"
          placeholder="CVC"
          pattern="\d{3,4}"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        /><br/>
        <div className="d-grid">
          {/* <button type="submit" className="btn btn-dark">Save Details</button> */}
          <button type="submit" className="btn btn-dark spay">Save Details</button>
          <button onClick={handlePayment} className="btn btn-dark spay">Pay</button>
          
          
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
