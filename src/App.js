import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Allproducts from './Components/Allproducts/Allproducts';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
     <Menubar></Menubar>
     <Allproducts></Allproducts>
    </div>
  );
}

export default App;
