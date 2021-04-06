import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import './header.css'
import { createMuiTheme, responsiveFontSizes,ThemeProvider } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const Header = () => {
  return (

    <ThemeProvider theme={theme}>
  

    <Grid item xs={12}>
    <AppBar position="static" color="white" elevation={1}>
      <Toolbar>
        <Grid container xs={11}>
        <Grid item xs={1} sm={2}></Grid>
        <Typography variant="h4" component="h3" className="typographyStyles" >
          <ControlCameraIcon />
          AA Community
        </Typography>
        <Button variant="contained" color="secondary" className="placement" size="large" >
        Placement Prep
        </Button>
        <Grid item xs={0} sm={2}></Grid>

        </Grid>
       
      </Toolbar>
    </AppBar>
    </Grid>
    </ThemeProvider>

  );
};

export default Header;
