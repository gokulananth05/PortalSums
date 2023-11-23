import{BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from './Day7/Home';
import About from './Day7/About';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;