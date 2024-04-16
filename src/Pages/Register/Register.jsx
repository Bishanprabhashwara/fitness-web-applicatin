import React, { useState, useEffect } from 'react';
import './Reagister1.css'; 
import './Register2.css'; 
import img from "./logo.png";

function Register() {
  const [active, setActive] = useState(1);
  const [age, setAge] = useState("");

  useEffect(() => {
    updateProgress();
  }, [active]);

  const updateProgress = () => {
    const steps = document.querySelectorAll('.progress1-steps li');
    const form_steps = document.querySelectorAll('.form-step');

    // Check if elements are found before proceeding
    if (!steps || !form_steps || steps.length === 0 || form_steps.length === 0) {
      return;
    }

    // Toggle .active class for each list item
    steps.forEach((step, i) => {
      if (i === (active - 1)) {
        step.classList.add('active');
        form_steps[i].classList.add('active');
      } else {
        step.classList.remove('active');
        form_steps[i].classList.remove('active');
      }
    });
  }

  const nextButtonHandler = () => {
    let nextActive = active + 1;
    setActive(nextActive > 3 ? 3 : nextActive);
  }

  const prevButtonHandler = () => {
    let prevActive = active - 1;
    setActive(prevActive < 1 ? 1 : prevActive);
  }

  const currentYear = new Date().getFullYear();

  const updateEndYear = (year) => {
    const age1 = document.getElementById('age');
    age1.value = currentYear - parseInt(year);
    setAge(age1.value);
  }
  ///////////////////////////////////////////////////////////////////////
  const [userData, setUserData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    weight: '',
    height: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/user/saveUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), 
      });

      if (!response.ok) {
        throw new Error('Failed to send data to the backend');
      }

      const responseData = await response.json();
      console.log('Response from backend:', responseData);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div id="page" className="site">
      <div className="container">
        <div className="form-box">
          <div className="progress1">
            <div className="logo"><img src={img} alt="" /></div>
            <ul className="progress1-steps">
              <li className="step active">
                <span className="stage-num"><a href=".form-one">1</a></span>
                <p>Personal<br /><span>30 secs to complete</span></p>
              </li>
              <li className="step">
                <span className="stage-num">2</span>
                <p>Body Details<br /><span>25 secs to complete</span></p>
              </li>
              <li className="step">
                <span className="stage-num">3</span>
                <p>Security<br /><span>35 secs to complete</span></p>
              </li>
            </ul>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className="form-one form-step active">
              <h2>Personal Information</h2>
              <p>Enter your personal information correctly</p>
              <div>
                <label>First Name</label>
                <input type="text" placeholder='e.g. Harsnana' name="firstName"
                        value={userData.firstName}
                        onChange={handleChange} />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder='e.g. Eshan' 
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}/>
              </div>
              <div className="birth">
                <label>Date of Birth</label>
                <div className="grouping">
                  <input type="text" placeholder='DD' />
                  <input type="text" placeholder='MM' />
                  <input type="text" placeholder='YYYY' id="year" onChange={(e) => updateEndYear(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="form-two form-step">
              <h2>Body Details </h2>
              <p>Enter your body details correctly</p>

              <div className="wh">
                <div className="wh grouping">
                  <div className="left">
                    <div className="lbl-w"><label>Age:</label></div>
                    <div className="">
                      <input type="text" id="age" readOnly />
                      <label className="imp">Years</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wh">
                <div className="wh grouping">
                  <div className="left">
                    <div className="lbl-w"><label>Weight</label></div>
                    <div className="">
                      <input type="text" name="weight"
                            value={userData.weight}
                            onChange={handleChange}/>
                      <label className="imp">Kg</label>
                    </div>
                  </div>
                  <div className="right">
                    <div className="lbl-h"><label>Height</label></div>
                    <div className="">
                      <input type="text" name="height"
                            value={userData.height}
                            onChange={handleChange}/>
                      <label className="imp">Meters</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-three form-step">
              <h2>Security</h2>
              <div>
                <label>Email</label>
                <input type="email" placeholder='example@gainer.com' name="email"
                        value={userData.email}
                        onChange={handleChange} />
              </div>
              <div>
                <label>User Name</label>
                <input type="text" placeholder='username' name="userName"
                        value={userData.userName}
                        onChange={handleChange} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" placeholder='Password' name="password"
                        value={userData.password}
                        onChange={handleChange}/>
              </div>
              <div>
                <label>Confirm Password</label>
                <input type="text" placeholder='Confirm Password' />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <label>Receive our newsletter and special offers</label>
              </div>
            </div>
            <div className="btn-group">
              <button className="btn-prev btnAll" type='button' onClick={prevButtonHandler}>Back</button>
              <button className="btn-next btnAll" type='button' onClick={nextButtonHandler}>Next Step</button>
              <button className="btn-submit btnAll" type='submit'>Submit</button>

            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Register;
