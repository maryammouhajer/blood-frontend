import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BloodType = () => {
  const [bloodTypes, setBloodTypes] = useState([]);

  useEffect(() => {
    fetchBloodTypes();
  }, []);

  const fetchBloodTypes = async () => {
    try {
      const response = await axios.get('http://localhost/blood_back/api/bloodtype.php');
      setBloodTypes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Blood Types</h2>
      <ul>
        {bloodTypes.map((bloodType) => (
          <li key={bloodType.id}>{bloodType.blood_group}</li>
        ))}
      </ul>
    </div>
  );
};

export default BloodType;
