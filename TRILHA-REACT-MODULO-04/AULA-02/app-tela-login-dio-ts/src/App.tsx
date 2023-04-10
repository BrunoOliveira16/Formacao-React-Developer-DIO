import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { AuthContextProvider } from './context/auth';

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>     
  );
}

export default App;