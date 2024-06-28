import React from 'react'
import { useDispatch } from 'react-redux'
import { setPreviewText, setSubjectLineA, setSubjectLineB } from '../features/email/emailSlice';
import { TextField, InputAdornment, Tooltip, Box, Button, Typography, Grid, InputLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const EmailSubjectInput = () => {

  const dispatch = useDispatch();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item container alignItems="center">
        <InputLabel sx={{ mr: 0.5 }}>
          Subject line A
        </InputLabel>
        <Typography color="error" variant="subtitle1">
          *
        </Typography>
        <Tooltip title="Helper text">
          <HelpOutlineIcon sx={{ ml: 0.5, cursor: 'pointer', color: "blue" }} />
        </Tooltip>
      </Grid>
      <Grid item container spacing={1} alignItems="center">
        <Grid item xs>
          <TextField
            id="subject-line-a"
            placeholder=""
            onChange={(e) => dispatch(setSubjectLineA(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ borderRight: '1px solid #ccc', paddingRight: '8px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 8px',
                      height: '100%',
                      fontWeight: 'normal',
                      color: '#333',
                    }}
                  >
                    A
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon style={{color: "blue"}} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button variant="Solid" color="neutral" style={{
            border: "0.1px solid", 
            borderRadius: 20,  
            backgroundColor: 'white', 
            borderColor: 'gray', 
          }} >
            Use AI
          </Button>
        </Grid>
      </Grid>

      <Grid item container spacing={1} alignItems="center">
        <Grid item xs>
          <TextField
            id="subject-line-b"
            placeholder=""
            onChange={(e) => dispatch(setSubjectLineB(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ borderRight: '1px solid #ccc', paddingRight: '8px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 8px',
                      height: '100%',
                      fontWeight: 'normal',
                      color: '#333',
                    }}
                  >
                    B
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon style={{color: "blue"}} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'right' }}>
          <Button variant="Solid" color="neutral" style={{
            border: "0.1px solid", 
            borderRadius: 20,  
            backgroundColor: 'white',  
            borderColor: 'gray',  
          }} >
            Use AI
          </Button>
        </Grid>
      </Grid>

      {/* Preview Text */}
      <Grid item container alignItems="center">
        <InputLabel sx={{ mr: 0.5 }}>
          Preview Text
        </InputLabel>
        <Tooltip title="Helper text">
          <HelpOutlineIcon sx={{ ml: 0.5, cursor: 'pointer', color: "blue" }} />
        </Tooltip>
      </Grid>    
      <Grid item xs>
          <TextField
            id="preview"
            placeholder=""
            onChange={(e) => dispatch(setPreviewText(e.target.value))}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon style={{color: "blue"}} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
    </Grid>
  )
}

export default EmailSubjectInput