import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages";
import { SignIn, Register } from "./pages/Auth";
import path from "./ultis/path";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={path.HOME} element={<Homepage />} />
          <Route path={path.SIGNIN} element={<SignIn />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
