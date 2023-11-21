import './App.css';
import Movies from "./pages/Movies";
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage/HomePage';
import {Movie} from './pages/SingleMovie/Movie';

function App() {
  return (
    <>
      <Navbar />
      {/* <div className='container'> */}
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/Movies' element={< Movies />} />
          <Route path='/:id' Component={Movie}/>
        </Routes>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
