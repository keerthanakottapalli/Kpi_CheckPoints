import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './MainPage';

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path='/' element={< MainPage/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
