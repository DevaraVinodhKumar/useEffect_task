import React, { useEffect, useState } from 'react';
import {CoffeeCard} from '../Components/CoffeeCard';


export function Coffee() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetchingData();
  },[])

  const fetchingData = async()=>{
         
    try{

      let response = await fetch("http://localhost:8080/coffee");
      let data = await response.json();
      console.log(data)
      setCoffeeData(data);
      
    }
    catch(error){
      console.log(error);
    }
    
  }
  
  
  return (
    <div style={{textAlign:"center"}}>
      <button style={{background:"blue",color:"white",textAlign:'center'}} onClick={fetchingData}>Get Coffee</button>

      <div className='data'>
       {coffeeData.map((coffee) => {
        return <CoffeeCard  {...coffee} key = {coffee.id}/>})
       }
        
      </div>
    </div>
  );
}


