import React from "react";

const BloodGroupSelect = ({ value, onChange }) => {
    const bloodGroups = [
      { value: "", label: "Select" },
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B+", label: "B+" },
      { value: "B-", label: "B-" },
      { value: "AB+", label: "AB+" },
      { value: "AB-", label: "AB-" },
      { value: "O+", label: "O+" },
      { value: "O-", label: "O-" },
    ];
  
    return (
      <select
        name="blood"
        className="form-control"
        value={value}
        onChange={onChange}
        required
      >
        {bloodGroups.map((group) => (
          <option key={group.value} value={group.value}>
            {group.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default BloodGroupSelect;
  