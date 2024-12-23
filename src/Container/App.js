import React, { useState,useEffect } from 'react'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';

const App = () => {
    const [robots , setRobots]=useState([]);
    const [searchfield,setSearchfield]=useState('');
    const [filteredRobots, setFilteredRobots]=useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>{
        setRobots(users);
        setFilteredRobots(users);
      });
  },[]); // Empty dependency array ensures this runs only once on mount


    const onSearchChange=(event)=>{
        
         const searchValue = event.target.value.toLowerCase();
         setSearchfield(searchValue);
         setFilteredRobots(robots.filter((robot) =>robot.name.toLowerCase().includes(searchValue)));
    }
  if(robots.length===0)
  {
     return <h1 className='f2'>Loading!!</h1>;
  }
  else{
    return (
      <div className='tc'>
        <h1 className='f2'>Robo Friends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
  
}

export default App