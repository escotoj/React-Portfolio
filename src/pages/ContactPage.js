import { Box, Stack, TextField } from "@mui/material";
import { Typography } from "@mui/material";


function ContactPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
        Lets Connect!
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
      <h2>Contact Me</h2>
      <h3> </h3>
      <TextField
  id="outlined-name"
  label="Name"
/>
<TextField
  id="outlined-name"
  label="Email"
/>
<TextField
  id="outlined-name"
  label="Subject"
/>
<TextField fullWidth label="Message" id="fullWidth" />

      </Typography>
      </Box>
      </Stack>
      
      {/* <Footer/> */}
    </Box>
  );
}

export default ContactPage;