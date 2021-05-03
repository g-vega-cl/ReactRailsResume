import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/projects.json")
      .then((resp) => setProjects(resp.data.data))
      .catch((resp) => console.log("error Home.tsx fetch ", resp));
  }, [projects.length]);

  return (
    <Grid style={{
      height: '500px',
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg)`}}>El body</Grid>
  );
};

export default Home;
