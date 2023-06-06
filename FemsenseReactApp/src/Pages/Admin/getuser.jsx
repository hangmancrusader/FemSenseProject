import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [userProfile, setUserProfile] = useState('');
  const [roleId, setRoleId] = useState('');
  const [userid, setUserid] = useState('');
  const [jwt, setjwtToken] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve userID from local storage and set it in state
    const storedUserID = localStorage.getItem('userid');
    setUserid(storedUserID);
  }, []);
  useEffect (()=>{
    const jwt = localStorage.getItem('jwt');
    setjwtToken(jwt)
  }, [])
  useEffect(() => {
    const fetchUserProfile = async () => {
      // Get the JWT token from local storage
      //const token = localStorage.getItem('jwt');
      if (!userid || !jwt) {
        // Return early if either userid or jwt is missing
        console.log("jwt or userid is missing")
        return;
      }
      console.log(jwt);
      console.log(userid)
      // Set the headers with the Authorization token
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      
      try {
        const response = await axios.get(`http://localhost:3000/user/profile/${userid}`,config);
        const userData = response.data;
        setUserProfile(userData);
        setRoleId(userData.roleid);
        console.log(response);
        if (userData.roleid === 1) {
          
          alert('You are an admin!');
          navigate("/adminoptions")// /adminpanel will have options to get all users, 
        } else {
          
          alert('You are not an admin!');
          navigate('/periodtracker')
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [userid, jwt]);

  return (
    <div>
      
      
    </div>
  );
};

export default UserProfile;
