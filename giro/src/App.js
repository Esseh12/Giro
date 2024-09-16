import { Routes, Route } from 'react-router-dom';
import Login from "./components/authetication/login";
import About from './components/mainPages/about';
import Error404 from './components/mainPages/error404';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
