import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

const Navbar = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{backgroundColor:'rgb(50,50,50)'}}>
      <Grid container style={{paddingLeft:'10px', marginBottom:'-6px'}}>
        <Grid item xs={8}>
          <h1 style={{color:'white'}}> César Leonardo Vega Galván</h1>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
