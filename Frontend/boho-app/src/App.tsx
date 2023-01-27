import './assets/style/App.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Main from './components/shared/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>         
            <Route element={<Main />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/gallery' element={<Gallery />} />              
            </Route>         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
