import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import GenContent from './pages/GenContent';
import ParaphraseText from './pages/ParaphraseText';
import RefineText from './pages/RefineContent';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/gc" element={<GenContent />} />
        <Route path="/rt" element={<ParaphraseText/>} />
        <Route path="/pt" element={<RefineText/>} />
      </Routes>
    </div>
  );
}

export default App;
