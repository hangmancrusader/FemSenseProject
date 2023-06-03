import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Viewdaytrack = ({ id }) => {
  const [daytrack, setDaytrack] = useState(null);
  
  useEffect(() => {
    const fetchDaytrack = async () => {
      try {
        const response = await axios.get(`/api/daytracks/${2}`);
        setDaytrack(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDaytrack();
  }, [id]);

  if (!daytrack) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Daytrack Details</h2>
      <p>User ID: 12</p>
      <p>Date: 12-12-2020</p>
      <p>Water Amount: 5 </p>
      <p>Weight: 50</p>
      <p>Sleep: 425</p>
      <p>Body Temp: {35.2}</p>
      
    </div>
  );
};

export default Viewdaytrack;
