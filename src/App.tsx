import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* Temporary nav */}
        <nav className="">
          <div className="px-8 py-4 bg-purple-400">
            <div className="flex text-white space-x-6">
              <Link to="/">Home</Link>
              <Link to="/account/login">Login</Link>
            </div>
          </div>
        </nav>
        <div className="max-h-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
