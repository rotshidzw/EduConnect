import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import FormField from './FormField';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!schoolName || !address || !city || !state || !zipCode || !phoneNumber) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Create payload
    const payload = {
      schoolName,
      address,
      city,
      state,
      zipCode,
      phoneNumber,
      website,
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
          setSchoolName('');
          setAddress('');
          setCity('');
          setState('');
          setZipCode('');
          setPhoneNumber('');
          setWebsite('');
          navigate('/success'); // Navigate to success page
        } else {
          // Registration failed
          setErrorMessage('Registration failed. Please try again.');
        }
      })
      .catch(() => {
        // API request failed
        setErrorMessage('Registration failed. Please try again.');
      });
  };

  return (
    <Layout>
      <div className="container  mx-auto">
        <h2 className="text-2xl font-bold mb-4">School Registration Form</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleFormSubmit} className="mb-4">
          <FormField
            label="School Name"
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <FormField
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormField
            label="City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <FormField
            label="State"
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <FormField
            label="Zip Code"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <FormField
            label="Phone Number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormField
            label="Website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
        </form>
        <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </Layout>
  );
};

export default RegistrationForm;
