import { Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Get the JWT token from local storage
      const token =
    typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
      console.log("Jwt tocken is "+token);
  
      // Call the logout API endpoint with the formatted JWT token in the Authorization header
      await axios.post('http://localhost:3000/user/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Remove the JWT token from local storage
      localStorage.removeItem('jwt');
      localStorage.removeItem('userid');
  
      // Redirect to the homepage
      window.location.href = '/homepage';
    } catch (error) {
      alert("Error in Logout");
      // Handle any error that occurred during logout
      // You can show an error message or perform any other necessary actions
    }
  };
  
  

  return (
    <Button
      onClick={handleLogout}
      sx={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        textTransform: 'none',
        fontFamily: 'Avenir Next',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '25px',
        lineHeight: '150%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#C46471',
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;