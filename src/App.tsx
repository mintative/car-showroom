
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles/:id" element={<VehicleDetails />} />
    </Routes>
  )
}

export default App;
