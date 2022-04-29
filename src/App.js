import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Thanks from './Components/Thanks/Thanks';
import SecondPage from './Components/SecondPage/SecondPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tech" element={<SecondPage />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
