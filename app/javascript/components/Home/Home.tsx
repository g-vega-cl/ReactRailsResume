import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid} from '@material-ui/core'


const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/projects.json')
    .then( resp => setProjects(resp.data.data))
    .catch(resp => console.log("error Home.tsx fetch ", resp));
  },[projects.length]);

  return (
    <Grid
    container
    style={{backgroundColor:'red'}}>
      <Grid item xs = {8} style={{padding:'10px 30px 10px 30px'}}>
        <h1> César Leonardo Vega Galván</h1>
      </Grid>
    </Grid>
  );
};

export default Home;
