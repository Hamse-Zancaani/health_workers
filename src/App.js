import './App.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Recruitment from './pages/Recruitment';
import BlogsPage from './pages/BlogsPage';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import Contactus from './pages/Contact/Contactus';
import Workers from './pages/Temporary_workers';
import Services from './pages/Services';
import Events from './pages/News/Events';
import Projects from './pages/Courses/projects';
import HomePage from './pages/News/Home/HomePage'
import Production from './pages/Production_sector/Production';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:url" element={<SingleBlog />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/temporaryworkers" element={<Workers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/news" element={<HomePage />} />
      <Route path="/productionsector" element={<Production />} />
      
      

      
    </Routes>
  );
}

export default App;
