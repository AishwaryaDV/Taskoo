import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Overview from './components/Overview';
import Notes from './components/Notes';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Calender from './components/Calender';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/stats" element={<Stats/>} />
          <Route path="/calender" element={<Calender/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
