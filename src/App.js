import React, { useState } from 'react';
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState([]);
  const [password, setPassword] = useState('');
  const [passwordStrengthClass, setPasswordStrengthClass] = useState('');

  const validate = (value) => {
    const errors = [];

    if (value.length < 8) {
      errors.push('At least 8 characters');
    }
    if (!/[a-z]/.test(value)) {
      errors.push('At least one lowercase letter');
    }
    if (!/[A-Z]/.test(value)) {
      errors.push('At least one uppercase letter');
    }
    if (!/[0-9]/.test(value)) {
      errors.push('At least one number');
    }
    if (!/[^A-Za-z0-9]/.test(value)) {
      errors.push('At least one symbol');
    }

    if (errors.length === 0) {
      setErrorMessage(['✅ Strong password!']);
      setPasswordStrengthClass('strong');
    } else {
      setErrorMessage(errors);
      setPasswordStrengthClass('weak');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Password Strength Checker</h2>
        <label htmlFor="password-input">Enter Password:</label>
        <input
          id="password-input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            validate(e.target.value);
          }}
          value={password}
          placeholder="Enter your password"
        />
        <div className={`message ${passwordStrengthClass}`}>
          {errorMessage.length > 0 && (
            <ul>
              {errorMessage.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
