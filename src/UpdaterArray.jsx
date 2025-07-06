
import React, {useState} from 'react'

const UpdaterArray = () => {

  const [foods,setFoods] = useState([ "Rice", "Beans", "Spagetthi" ]);

  const handleAddFood = () => {
    setFoods(f => [...f,newFood])
    const newFood = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""
    
  }

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((element,i) => i !== index))
  }

  return (
    <div className='flex flex-col items-center justify-center max-w-8xl bg-gray-400'>
      <h1>Lists Of Foods</h1>  
      <ul>
         {foods.map((food,index) => 
         <li key={index} onClick={() => {handleRemoveFood(index)}} 
         >{food}</li> )}
      </ul>   

      <div>
        <input type="text" id='foodInput' placeholder='Enter any food name' />
        <button className='cursor-pointer' onClick={handleAddFood} >Add</button> 
      </div>
    </div>
  )
}

export default UpdaterArray