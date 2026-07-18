
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles/:id" element={<Home />} />
    </Routes>
  )
}

export default App;
