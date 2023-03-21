import { Home } from './pages/home';
import { Login } from './pages/login';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (<>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
