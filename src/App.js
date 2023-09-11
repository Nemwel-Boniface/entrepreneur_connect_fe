import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import LogIn from './components/user/LogIn';
import SignUp from './components/user/SignUp';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className='Home'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='login' element={ <LogIn /> } />
        <Route path='signup' element={ <SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
