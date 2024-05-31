import './App.css';
import Home from './Home';
import Projects from './components/projects/Projects'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="nav">
      <Navbar/>
      </div>
      <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
      </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
