import { Box, CircularProgress, Container } from "@mui/material"

const LandingPage = () => {
  return (
    <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" sx={{mt: 22}}>
            <CircularProgress/>
        </Box>
    </Container>
  )
}

export default LandingPage