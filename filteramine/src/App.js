
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Data';
import { useState} from 'react'
import Card from './Card';
import './App.css';
import Buttons from './Buttons';

function App() {
  const [items,setItems]=useState(data)
  const menuItems=[...new Set(data.map((val)=>val.category))]
  const filterItems=(cat)=>{
    const newItems=data.filter((newval)=>newval.category===cat)
    setItems(newItems)
  }
  return (
    <div className=' container container-fluid '>
    <div className='appss appss-row'>
    <h1 className='text-center col-12 fw-bold mt-3 mb-5'>Foof filter app</h1>
    <Buttons menuItems={menuItems}
    filterItems={filterItems}
    setItems={setItems}
    />
   
    <Card  items={items} />
    </div>
    </div>
  );
}

export default App;
