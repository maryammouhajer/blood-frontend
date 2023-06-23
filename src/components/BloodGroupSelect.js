import axios from "axios";
import React, { useEffect, useState } from "react";

const BloodGroupSelect = ({ value, onChange }) => {
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
      <select
        name="blood"
        className="form-control"
        value={value}
        onChange={onChange}
        required
      >
        {bloodTypes.map((bloodType) => (
            <option key={bloodType.id} value={bloodType.blood_group}>
              {bloodType.blood_group}
            </option>
          ))}
      </select>
    );
  };
  
  export default BloodGroupSelect;
  