import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
