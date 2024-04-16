import React, { useState } from 'react';

function ProductDetails() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [total, setTotal] = useState(0);

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
      <div>
        <label>Weight:</label>
        <input type="number" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Height:</label>
        <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
      </div>
      <button onClick={postData}>Calculate Total</button>
      {total !== 0 && <p>Total: {total}</p>}
    </div>
  );
}

export default ProductDetails;
