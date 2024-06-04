import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Courses from './Components/Courses';
import Campus from './Components/Campus';
import Facilities from './Components/Facilities';
import AboutUs from './Components/AboutUs'
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import Prices from './Components/Prices';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <><Header/> <Courses/> <Facilities/> <Campus/> <Prices/> <AboutUs/>  <Cta/> <Footer/></>}/>
        <Route path='/prices' element={ <><Header/> <Prices/> <AboutUs/>  <Cta/> <Footer/></>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
