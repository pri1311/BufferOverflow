import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/login" element = { <Login/> } />
          <Route path = "/register" element = { <Register/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
