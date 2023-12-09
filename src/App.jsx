import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import Create from './pages/create';
import Update from './pages/update';

function App() {
  return (
    <Router>
      <div className="content font-sans">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
