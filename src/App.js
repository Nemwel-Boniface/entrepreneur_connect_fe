import './stylesheets/homePage/hero.css';
import './stylesheets/homePage/features.css';
import './stylesheets/homePage/aboutus.css';
import './stylesheets/homePage/contactus.css';
import './stylesheets/homePage/footer.css';
import './stylesheets/homePage/navbar.css';
import './stylesheets/user/login.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import LogIn from './components/user/LogIn';
import SignUp from './components/user/SignUp';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="Home">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
