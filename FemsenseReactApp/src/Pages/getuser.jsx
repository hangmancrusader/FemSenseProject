import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState('');
  const [roleId, setRoleId] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      // Get the JWT token from local storage
      const token = localStorage.getItem('jwt');

      // Set the headers with the Authorization token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get('http://localhost:3000/user/profile', config);
        const userData = response.data;
        setUserProfile(userData);
        setRoleId(userData.roleid);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <Typography variant="h4">User Profile</Typography>
      {userProfile ? (
        <div>
          <p>First Name: {userProfile.firstname}</p>
          <p>Last Name: {userProfile.lastname}</p>
          <p>Email: {userProfile.email}</p>
          <p>Phone Number: {userProfile.phonenumber}</p>
          <p>Date of Birth: {userProfile.dob}</p>
          <p>Role ID: {roleId}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;
