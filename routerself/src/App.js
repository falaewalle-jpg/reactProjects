import {Routes,Route} from 'react-router-dom';
import './App.css';
import MyRoute from './Routes/MyRoute';
import Navbar from './Navs/Navbar';
import MyButton from './components/MyButton';
function App() {
  return (
      <div className="App">
        <Navbar/>
        <MyRoute/>
        <MyButton/>
      </div>
  );
}
export default App;
