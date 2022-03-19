import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Allproducts from './Components/Allproducts/Allproducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  const [count, setCount]=useState(0)
  return (
    <div className="App">
     <Menubar count={setCount(count)}></Menubar>
     <Allproducts></Allproducts>
    </div>
  );
}

export default App;
