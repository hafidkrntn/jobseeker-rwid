import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Onboarding from "./pages/Onboarding";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/register/onboarding" element={<Onboarding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
