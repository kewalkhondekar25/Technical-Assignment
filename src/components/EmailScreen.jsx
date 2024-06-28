import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Card, CardContent, IconButton, Box } from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import theme from './AppTheme';
import { useSelector } from 'react-redux';
import { data } from '../utils/data';

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

const getAmPm = () => {
  const date = new Date();
  const hours = date.getHours();
  return hours >= 12 ? 'PM' : 'AM';
};

const EmailScreen = () => {
  const { subjectLineA, subjectLineB, previewText } = useSelector((store) => store.email);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [amPm, setAmPm] = useState(getAmPm());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setAmPm(getAmPm());
    }, 60000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: theme.spacing(4) }}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBack />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" component="div">
                Inbox
              </Typography>
            </Box>
            <IconButton edge="end" color="inherit" aria-label="options">
              <MoreVert />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CardContent>
          <List sx={{ width: '100%' }}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#4E75EB' }}>
                  A
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 'bold' }}>The Green Yoga</Typography>}
                secondary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{subjectLineA}
                <div style={{fontWeight: "normal"}}>{previewText}</div>
                </Typography>}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  {currentTime}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ ml: 0.5 }}>
                  {amPm}
                </Typography>
              </Box>
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'purple' }}>
                  B
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography sx={{ fontWeight: 'bold' }}>The Green Yoga</Typography>}
                secondary={<Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'black' }}>{subjectLineB}
                <div style={{fontWeight: "normal"}}>{previewText}</div>
                </Typography>}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  {currentTime}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ ml: 0.5 }}>
                  {amPm}
                </Typography>
              </Box>
            </ListItem>
            {data.map((item) => (
              <ListItem key={item.date} button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#4E75EB' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography sx={{ fontWeight: 'bold' }}>{item.primary}</Typography>}
                  secondary={<Typography sx={{ fontWeight: 'bold' }}>{item.secondary}</Typography>}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    {item.month}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ ml: 0.5 }}>
                    {item.date}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default EmailScreen;
