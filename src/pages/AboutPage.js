import { Box, Stack, Typography } from "@mui/material";

function AboutPage() {
  return (

    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" marginTop={5}>
         <Box
      sx={{
        width: { xs: "100%", sm: "70%", lg: "70%" },
        // height: { xs: 350, sm: 600, lg: 1000 },
      }}
    >
      <Stack
        spacing={1}
      >
        <Typography variant="h2" align="center">
          About Me
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "8px",
            
          }}
        >
          <Typography variant="body1" align="center">
            <h2>AKA JAE The Illust </h2>
            <h3>Full Stack Software Engineer </h3>
            Started my working career as an artist, later studied Psychology at
            the University to later work as a recruiter in the tech industry.
            Now Im a Full Stack Web Development with a certificate of completion from UC Berkeley, CA. I
            am on a journey to learn and apply web development skills start a
            career as Software Engineer
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <img
              src="finalAvatar.jpg"
              alt="Profile Picture"
              style={{ borderRadius: "50%", width: "250px", height: "250px" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
    </Box>
 
  );
}

export default AboutPage;
