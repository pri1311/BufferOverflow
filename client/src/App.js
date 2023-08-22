import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  // Here itself, since we are using JWT auth, anytime someone opens the App and the user store is empty but JWT token is present in local storage, repopulate the data. But HOW? OK added an endpoint.
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path = "/login" element = { <Login/> } />
          <Route path = "/register" element = { <Register/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
