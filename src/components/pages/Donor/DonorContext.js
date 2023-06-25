// DonorContext.js
import React, { createContext, useState } from 'react';

const DonorContext = createContext();

const DonorProvider = ({ children }) => {
  const [donor, setDonor] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateProfile = (updatedDonor) => {
    setDonor(updatedDonor);
  };

  const logout = () => {
    setDonor(null);
    setIsLoggedIn(false);
  };

  return (
    <DonorContext.Provider
      value={{
        donor,
        isLoggedIn,
        updateProfile,
        logout,
      }}
    >
      {children}
    </DonorContext.Provider>
  );
};

export { DonorContext, DonorProvider };
