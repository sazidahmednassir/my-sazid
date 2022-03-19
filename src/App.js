import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Allproducts from './Components/Allproducts/Allproducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  const [count, setCount]=useState(0)

  const setCart = ()=>{
   setCount(count+1)
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
     <Menubar count={count}></Menubar>
     <Allproducts setCart={setCart}></Allproducts>
    </div>
  );
}

export default App;
