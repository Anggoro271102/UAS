import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './style.css'
import Navbar from './component/Navbar';
import Hobby from './pages/Hobby';
import Skill from './pages/Skill';
import Footer from './component/Footer';
import About from './pages/About';
import HomeSection from './component/HomeSection';


function App() {
  return (
    <Router>
      <div>
          <Navbar/>
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path='/home' element = {<HomeSection/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="/hobby" element ={<Hobby/>}/>
            <Route path="/myskill" element ={<Skill/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
      
  );
}

export default App;
