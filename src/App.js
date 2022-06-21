import './App.css';
import {Route,Routes} from 'react-router-dom'
import Todolistfinal from './components/TODO/todolistfinal';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Meditation from './components/Meditation';
import Games from './components/GAMES/Games';



import './components/TODO/Antodo.css';

function App() {
  return (
    <div className="App bg-dark">
     <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="meditation" element={<Meditation/>} ></Route>
        <Route path="games" element={<Games/>}></Route>
        <Route path="/todo" element={<Todolistfinal/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
