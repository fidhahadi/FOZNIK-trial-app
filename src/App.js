import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Whoweare from './Components/Whoweare';
import Services from './Components/Services';
import Statistics from './Components/Statistics';
import Courses from './Components/Courses';
import Studentreviews from './Components/Studentreviews';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Tailwindtest from './Components/Tailwindtest';
import Purchase from './Components/Purchase';
import logo from './Components/images/logo-green.png'


function App() {
  return (
   <>
   <Navbar />
   <div class="na">
        <nav class="nav">
        <img class="absolute left-10 top-19 h-15 w-35" src={logo} alt="" />
          <Link to="/" class="nav-item">HOME</Link>
          <Link to="/about-us" className="nav-item">ABOUT US</Link>
          <Link to="/courses" className="nav-item">COURSES</Link>
          <Link to="/pages" className="nav-item">PAGES</Link>
          <Link to="/blog" className="nav-item">BLOG</Link>
          <Link to="/contact" className="nav-item">CONTACT</Link>
          <Link to="/search" class="nav-item text-green"><i class="fa fa-search" aria-hidden="true"></i></Link>
        </nav>
        </div>
    <Routes>
    <Route path="/" element={<Introduction />} />
    <Route path="/about-us" element={<Aboutus />} />
    </Routes>

    <Services />
    <Whoweare />
    <Statistics />
    <Courses />
    <Studentreviews />
    <Gallery />
    <Purchase />
    <Footer />
    <Tailwindtest />
   </>
  );
}

export default App;
