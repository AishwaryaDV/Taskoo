import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Overview from './components/Overview';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/overview" element={<Overview/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
