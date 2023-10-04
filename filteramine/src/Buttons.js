import React from 'react'
import data from './Data'
function Buttons({menuItems,filterItems,setItems
  
}) {
  return (
    <div className='d-flex justify-content-center mb-2 '>
 {
    menuItems.map(val=>(
       <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
       onClick={()=>filterItems(val)}>
       
       {val}
       </button>
        ))
 }
 <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
 onClick={()=>setItems(data)}>
All
 </button>
    </div>
  )
}

export default Buttons
