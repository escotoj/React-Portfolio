import { Box, Stack, TextField, Button, Typography} from "@mui/material";
import { useState } from "react";



function ContactPage() {
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
    };
  
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Stack spacing={2}>
          <Typography variant="h2" align="center">
            Let's Connect!
          </Typography>
          <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
            <Typography variant="body1" align="center">
              <h2>Contact Me</h2>
              {/* textfield wrapped in a form with a function that handles the event */}
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  variant="outlined"
                  fullWidth
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                  }}
                />
                <TextField
                  id="outlined-subject"
                  label="Subject"
                  variant="outlined"
                  fullWidth
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
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  InputProps={{
                    sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
                  }}
                />
                <Button type="submit" variant="contained" color="success" sx={{ marginTop: "10px" }}>
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
