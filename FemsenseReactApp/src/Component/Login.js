import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import evalogo from "./Images/Girl 2.jpg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isValidEmail(email)) {
      alert("Invalid email address");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      }) .then((result) => {
         const token = result.data.token;
         const id=result.data.user
    
        console.log(token);
        console.log(result); 
         localStorage.setItem('jwt', token);
         localStorage.setItem('userid',id);
        setOpen(true); 
        window.location.href = "/periodtracker"
        
      })
      .catch((err) => {
        console.log(err.message)
        alert("Invalid Email or password");
    
      });
  
      console.log(response.data);
  
      
      
    } catch (error) {
      
    }
  };

  const isValidEmail = (value) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#aa717e",
            background: "#e9dadb",
            padding: "50px",
            height: "600px",
            width: "450px",
            fontFamily: "Open Sans",
            textTransform: "none",
            fontSize: "10px",
          }}
        >
          
<Snackbar open={open} autoHideDuration={40000} onClose={() => setOpen(false)}>
  <MuiAlert
    elevation={6}
    variant="filled"
    severity="success"
    onClose={() => setOpen(false)}
    
  >
    Sign In Successful
  </MuiAlert>
</Snackbar>;
          <Avatar sx={{ m: 1, width: "100px", height: "100px" }} src={evalogo} />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={email.length > 0 && !isValidEmail(email)}
                  helperText={email.length > 0 && !isValidEmail(email) ? "Invalid email address" : ""}
                  sx={{
                    "& fieldset": {
                      borderColor: email.length > 0 && !isValidEmail(email) ? "red !important" : "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    "& fieldset": {
                      borderColor: "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "#ffffff",
                backgroundColor: "#AA9BA6",
                fontWeight: "bold",
                padding: "20px",
                margin: "5px",
                height: "10px",
                width: "350px",
                buttonShadow: "10px",
                fontFamily: "Open Sans",
                textTransform: "none",
                fontSize: "17px",
                "&:hover": { backgroundColor: "#aa717e" },
              }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="http://localhost:3001/signup"
                  variant="body2"
                  sx={{
                    color: "#aa717e",
                    "&:hover": { color: "#aa717e" },
                  }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
