// DashboardDonor.js
import React, { useEffect, useState } from 'react';
import BloodRequests from './BloodRequests';

const DashboardDonor = () => {
  const [bloodRequests, setBloodRequests] = useState([]);

  useEffect(() => {
    fetchBloodRequests()
      .then((data) => setBloodRequests(data))
      .catch((error) => console.log(error));
  }, []);

  const fetchBloodRequests = async () => {
    try {
      // Make an API call to fetch blood requests
      const response = await fetch('https://api.example.com/blood-requests');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch blood requests');
      }
    } catch (error) {
      throw new Error('Failed to fetch blood requests: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <BloodRequests requests={bloodRequests} />
    </div>
  );
};

export default DashboardDonor;
