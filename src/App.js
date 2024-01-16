import './App.css';
import { isExpired } from "react-jwt";
// import Movies from "./pages/Movies";
import Footer from './components/Footer';

import { Navigate, Route, Routes } from 'react-router-dom';


import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { Movie } from './pages/SingleMovie/Movie';
import { AddMovie } from './pages/AddMovie';
import { SignIn } from './pages/Login-SignUp/SignIn';
import { SignUp } from './pages/Login-SignUp/SignUp';
import { NotFound } from './components/NotFound';

function App() {
  const token = localStorage.getItem('token');
  const isNotLogged = token ? isExpired(token) : true;

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={ HomePage } />
          {/* <Route path='/movies' Component={ Movies } /> */}
          <Route path='/details/:id'    Component={  Movie  }/>
          <Route path='/signin' Component={ SignIn } />
          <Route path='/signup' Component={ SignUp } />
          <Route path='/add' element={ isNotLogged ? <Navigate replace to='/signin' /> : <AddMovie/> } />
          <Route path='*' Component={ NotFound } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
