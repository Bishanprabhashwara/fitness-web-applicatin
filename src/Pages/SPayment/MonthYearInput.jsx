// import React, { useState } from 'react';
// import './Payment.css'; // Import your CSS file
// const [creditCardNumber, setCreditCardNumber] = useState('');
// const CreditCardInput = () => {


//   return (
//     <div className="form-container">
//       <label htmlFor="creditCardInput">Credit Card Number:</label>
//       <input type="text" id="creditCardInput" inputMode="numeric" pattern="\d{4} \d{4} \d{4} \d{4}" placeholder="Enter your credit card number" value={creditCardNumber} onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// const handleInputChange = (e) => {
//     let inputValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//     inputValue = inputValue.substring(0, 16); // Limit the length to 16 digits

//     // Format the value as "#### #### #### ####"
//     let formattedValue = '';
//     for (let i = 0; i < inputValue.length; i += 4) {
//       formattedValue += inputValue.substring(i, i + 4) + ' ';
//     }

//     // Update the state with the formatted value
//     setCreditCardNumber(formattedValue.trim());
//   };

// export default CreditCardInput;