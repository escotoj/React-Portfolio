import { Box, Stack, Typography } from "@mui/material";

function AboutPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Stack
        spacing={2}
        sx={{
          width: { xs: 350, sm: 600, lg: 1000 },
          // height: { xs: 350, sm: 600, lg: 1000 },
        }}
      >
        <Typography variant="h2" align="center">
          About Me
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "50px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="body1" align="center">
            <h2>AKA JAE The Illust </h2>
            <h3>Full Stack Software Engineer </h3>
            Started my working career as an artist, later studied Psychology at
            the University to later work as a recruiter in the tech industry.
            Now Im a Full Stack Web Development Student At UC Berkeley, CA.
            Nearing the end of this program and soon to enter the job market. I
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
  );
}

export default AboutPage;
