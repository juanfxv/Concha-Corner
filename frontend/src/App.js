import './styling/App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home"
import About from './routes/About';
import Menu from './routes/Menu';
import Community from './routes/Community';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
