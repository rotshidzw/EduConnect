import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
      <p>Your account has been created successfully.</p>
      <p>You can now <Link to="/login" className="text-blue-500">login</Link> to access your account.</p>
    </div>
  );
};

export default SuccessPage;
