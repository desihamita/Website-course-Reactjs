import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Homepage from './pages/Homepage'
import Classpage from './pages/Classpage'
import Faqpage from './pages/Faqpage'
import SyaratKetentuanpage from './pages/SyaratKetentuanpage'
import Testimonialpage from './pages/Testimonialpage'

function App() {
  return(
  <div>
    <NavBar/>
      <Routes>
        <Route path='/' Component={ Homepage }/>
        <Route path='/kelas' Component={ Classpage }/>
        <Route path='/testimonial' Component={ Testimonialpage }/>
        <Route path='/faq' Component={ Faqpage }/>
        <Route path='/syaratketen' Component={ SyaratKetentuanpage }/>
      </Routes>
    <Footer/>
  </div>
  );
}

export default App
