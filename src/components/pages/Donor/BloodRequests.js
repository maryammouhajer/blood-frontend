// BloodRequests.js
import React from 'react';

const BloodRequests = ({ requests }) => {
  return (
    <div>
      <h3>Blood Requests</h3>
      {requests.map((request) => (
        <div key={request.id}>
          {/* Render the details of each blood request */}
        </div>
      ))}
    </div>
  );
};

export default BloodRequests;
