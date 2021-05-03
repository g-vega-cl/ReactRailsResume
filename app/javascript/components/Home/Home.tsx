import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    axios.get('/api/v1/projects.json')
    .then( resp => setProjects(resp.data.data))
    .catch(resp => console.log("error Home.tsx fetch ", resp));
  },[projects.length]);

  return (
    <div style={{backgroundColor:'red'}}>
      my Home
      <div>my Home 2</div>
    </div>
  );
};

export default Home;
