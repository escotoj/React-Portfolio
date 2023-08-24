import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { useState } from "react";

function ContactPage() {
  const [formError, setFormError] = useState(false);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // variables for each box
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // variable passes the form submit and logs each value
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("NAME-", name);
    console.log("EMAIL--", email);
    console.log("SUBJECT --:", subject);
    console.log("MESSAGE --", message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    setFormError(false);

    setShowSuccessAlert(true);

    if (name === "" || email === "" || subject === "" || message === "") {
      setFormError(true);
      return;
    }

    if (!validateEmail(email)) {
      setFormError("Invalid email address");
      setShowSuccessAlert(false);
      return;
    }
  };

  const validateEmail = (email) => {
    //  simple regex for email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      marginTop={5}
    >
    
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Let's Connect!
        </Typography>
        
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "50px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="body1" align="center">
            <h2>Contact Me</h2>

            {/* alert for when message is entered properly */}
            Send me a message or connect with me on my socials below!
            {showSuccessAlert && (
                  <Alert severity="success" style={{ justifyContent: 'center' }}>Message sent successfully!</Alert>
                )}
            {/* textfield wrapped in a form with a function that handles the event */}
            <br />
            <a
              href="https://www.linkedin.com/in/jose-escoto-b9519a146/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "darkorange", textDecoration: "none" }}
            >
              LinkedIn
            </a>
            {" | "}
            <a
  href="https://github.com/escotoj"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "darkorange", textDecoration: "none" }}
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://twitter.com/jaetheillust"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "darkorange", textDecoration: "none" }}
            >
              Twitter
            </a>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                // we assign value by passing the event with data
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                }}
              />
              <TextField
                id="outlined-email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                }}
              />
              {formError && name === "" && (
                <Alert severity="error">Error - Valid email is required!</Alert>
              )}
              <TextField
                id="outlined-subject"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                id="outlined-id"
                variant="outlined"
                multiline
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputProps={{
                  sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ marginTop: "10px" }}
              >
                Submit
                
              </Button>
            </form>


          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ContactPage;
