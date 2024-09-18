import { Routes, Route } from 'react-router-dom';
import Homepage from './components/mainPages/homepage';
import Login from "./components/authetication/login";
import About from './components/mainPages/about';
import Error404 from './components/mainPages/error404';
import Contact from './components/mainPages/contact';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Homepage />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
