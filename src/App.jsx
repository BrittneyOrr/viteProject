import {puppyList} from './data.js'
import { useState } from 'react'

import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  // console.log(puppyList)
  // console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  
  // function handleClick () {
  //   // some logic here
  // }

  return (
      <div className="App">
        {
          puppies.map((puppy) => {
          return <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>{puppy.name}</p>;


        })
        }
        </div>
  );
}

export default App
