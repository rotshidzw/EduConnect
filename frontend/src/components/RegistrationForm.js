import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

const FormField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-bold mb-1">{label}:</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Create payload
    const payload = {
      username,
      email,
      password1: password,
      password2: confirmPassword,
    };

    // Send API request
    fetch('http://localhost:8000/api/v1/auth/registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          // Registration successful

          setErrorMessage('');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/success'); // Navigate to success page
        } else {
          // Registration failed
          setErrorMessage('Registration failed. Please try again.');
          console.log(payload)
        }
      })
      .catch(() => {
        // API request failed
        setErrorMessage('Registration failed. Please try again.');
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleFormSubmit} className="mb-4">
        <FormField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
      </form>
      <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
      <p>Your account has been created successfully.</p>
      <p>You can now <Link to="/login" className="text-blue-500">login</Link> to access your account.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
