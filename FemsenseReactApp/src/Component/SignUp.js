import * as React from "react";
import { useState } from "react";
import { Avatar } from "@mui/material";
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
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import evalogo from "./Images/Girl 2.jpg";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [open, setOpen] = useState(false); // Snackbar state

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length < 5) {
      setSignupError("Name must be at least 5 characters");
      return;
    }
    if (!isValidEmail(email)) {
      setSignupError("Invalid email address");
      return;
    }
    if (password.length < 8) {
      setSignupError("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setSignupError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signupadmin", {
        email, 
        password,
        name
        
      })
      .then((result) => {
        console.log(result)
        window.location.href = "/login"
        setOpen(true);
      })
      .catch((err) => {
        console.log(err.message)
        alert("User Already Exist");
        //setSignupError("User Already Exist");
      })
      // if()
      // console.log(response); // Assuming the API response contains relevant information
      // setPassword("");
      // setConfirmPassword("");
      // // Reset the form
      // setName("");
      // setEmail("");
      // setPassword("");
      // setConfirmPassword("");
      // setSignupError("");

      // Redirect to the login page
      //;
    } catch (error) {
      console.log("Hello");
      setSignupError("Error occured");
      
    }
  };

  const isValidEmail = (value) => {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

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
            height: "700px",
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
    Sign Up Successful
  </MuiAlert>
</Snackbar>;
          <Avatar sx={{ m: 1, width: "100px", height: "100px" }} src={evalogo} />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={name.length > 0 && name.length < 5}
                  helperText={name.length > 0 && name.length < 5 ? "Name must be at least 5 characters" : ""}
                  sx={{
                    "& fieldset": {
                      borderColor: name.length > 0 && name.length < 5 ? "red !important" : "#6E5F6A !important",
                    },
                  }}
                />
              </Grid>

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
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="rewrite-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  label="I agree with Terms & Conditions."
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
              Sign Up
            </Button>
            {signupError && (
              <Typography variant="body2" color="error" align="center">
                {signupError}
              </Typography>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    color: "#aa717e",
                    "&:hover": { color: "#aa717e" },
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
