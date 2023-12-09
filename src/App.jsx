import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <div className="content font-sans">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<h1>create</h1>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
