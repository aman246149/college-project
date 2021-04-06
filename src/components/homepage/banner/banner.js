import React from "react";
import { Grid } from "@material-ui/core";
import './banner.css'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import myimageaman from "./aman.jpg" 

const banner=()=>{
    return(
        <Box pt={6} className="forpadding" >
           
       
        <Grid container spacing={3}>
            <Grid item xs={10} sm={6}>
                <h1 className="banner-leftside">
               
                    A modern way to learn and get placed to <br></br>
                     <span className="dream">your dream company</span></h1>
                <br></br>
                <p className="banner-paragraph"> This Website helps you to Get Placement Ready By Providing Free Course And Courses</p>
              
                <ButtonGroup size="large" variant="contained" >
                    <Button color="primary" >Placement Course</Button >
                    <Button color="secondary">Subject Notes</Button>
                 </ButtonGroup>
            </Grid>

            <Grid item xs={6}  className="fullscreen-bg">

        <img src={myimageaman} alt="avatar" className="amanimage"></img>      
                    
        </Grid>

        </Grid>

        </Box>
    )
}

export default banner;