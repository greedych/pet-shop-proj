import { Box, Grid, Stack, Typography } from "@mui/material";
import { GridBox, InfoData, InfoTitle } from "./styles";
import inst from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";

function Footer() {
  return (
    <Stack padding="40px 35px" gap="20px">
      <Typography variant="h2" fontWeight="700" paddingBottom={5}>
        Contact
      </Typography>
      <Grid container spacing={4}>
        <GridBox size={7}>
          <Stack>
            <InfoTitle>Phone</InfoTitle>
            <InfoData>+49 30 915-88492</InfoData>
          </Stack>
        </GridBox>
        <GridBox size={5}>
          <Stack>
            <InfoTitle>Socials</InfoTitle>
            <Stack sx={{ gap: "16px", flexDirection: "row" }}>
              <img src={inst} alt="inst" />
              <img src={whatsapp} alt="whatsapp" />
            </Stack>
          </Stack>
        </GridBox>
        <GridBox size={7}>
          <Stack>
            <InfoTitle>Address</InfoTitle>
            <InfoData>Wallstraẞe 9-13, 10179 Berlin, Deutschland</InfoData>
          </Stack>
        </GridBox>
        <GridBox size={5}>
          <Stack>
            <InfoTitle>Working Hours</InfoTitle>
            <InfoData>24 hours a day</InfoData>
          </Stack>
        </GridBox>
      </Grid>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.558090744685!2d13.401460215886247!3d52.511268079811474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c28e3a77b9%3A0x9d5eb344c0f3b1f4!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1591054871324!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </Box>
    </Stack>
  );
}

export default Footer;
