import { Routes, Route } from 'react-router-dom';
import Login from "./components/authetication/login";
import About from './components/mainPages/about';

function App() {
  return (
    <>
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
