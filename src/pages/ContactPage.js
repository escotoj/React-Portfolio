import { Box, Stack, TextField } from "@mui/material";
import { Typography } from "@mui/material";



// ADD BUTTON THAT TAKES INPUT FROM EAHC FORM 
function ContactPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Lets Connect!
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
            <h3> </h3>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
              }}
            />
            <TextField
            fullWidth
              id="outlined-email"
              label="Email"
              variant="outlined"
              InputProps={{
                sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
              }}
            />
            <TextField
              id="outlined-subject"
              label="Subject"
              variant="outlined"
              fullWidth
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
              InputProps={{
                sx: { borderRadius: "4px", backgroundColor: "#ffffff" },
              }}
            />
          </Typography>
        </Box>
      </Stack>

      {/* <Footer/> */}
    </Box>
  );
}

export default ContactPage;
