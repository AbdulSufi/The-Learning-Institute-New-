import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Courses from './Components/Courses';
import Facilities from './Components/Facilities';
import AboutUs from './Components/AboutUs'
import Cta from './Components/Cta';
import Footer from './Components/Footer';
import Prices from './Components/Prices';
import Safeguarding from './Components/Safeguarding';
import Privacy from './Components/Privacy';
import ContactUs from './Components/ContactUs';


function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <><Header/> <Courses/> <Facilities/> <Prices/> <AboutUs/>  <Cta/> <Footer/></>}/>
        <Route path='/prices' element={ <><Header/> <Prices/> <Cta/> <Footer/></>}/>
        <Route path='/aboutUs' element={ <><Header/> <AboutUs/>  <Cta/> <Footer/></>}/>
        <Route path='/contactUs' element={ <><Header/> <ContactUs/>  <Cta/> <Footer/></>}/>
        <Route path='/safeguard' element={ <><Header/> <Safeguarding/>  <Cta/> <Footer/></>}/>
        <Route path='/privacy' element={ <><Header/> <Privacy/>  <Cta/> <Footer/></>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
