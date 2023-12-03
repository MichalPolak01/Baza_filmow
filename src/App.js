import './App.css';
import Movies from "./pages/Movies";
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import { Movie } from './pages/SingleMovie/Movie';
import { AddFilm } from './pages/AddFilm';
import { SignIn } from './pages/Login-SignUp/SignIn';
import { SignUp } from './pages/Login-SignUp/SignUp';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={ HomePage } />
          <Route path='/movies' Component={ Movies } />
          <Route path='/details/:id'    Component={ Movie }/>
          <Route path='/signin' Component={ SignIn } />
          <Route path='/signup' Component={ SignUp } />
          <Route path='/add'    Component={ AddFilm } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
