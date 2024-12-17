import { Alert, Box, Button, Container, Link, Snackbar, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"
import fetchLogin from "../services/fetchLogin"

interface Props {
  nav: () => void
  goin: () => void
}

const Register = ({nav, goin}: Props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showError, setShowError] = useState(false)

  const hundleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const succeed = await fetchLogin(username, password, false);
    setShowError(succeed);
    if (!succeed) setShowError(true);
    if (succeed) goin();
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowError(false);
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 28}}>
        <Typography component='h1' variant="h5">Register</Typography>
        <Box component='form' onSubmit={hundleSubmit} sx={{mt: 3}}>
          <TextField margin="normal" required fullWidth id="username" label="username" name="username" autoComplete="name" autoFocus value={username} onChange={e => setUsername(e.target.value)}/>
          <TextField type="password" margin="normal" required fullWidth id="password" label="password" name="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Register</Button>
        </Box>
          <Link component="button" underline="hover" onClick={nav}>Already have account? Go to Login</Link>
      </Box>
      <Snackbar open={showError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert variant="filled" severity="error" sx={{ width: '100%' }}>Error</Alert>
      </Snackbar>
    </Container>
  )
}

export default Register