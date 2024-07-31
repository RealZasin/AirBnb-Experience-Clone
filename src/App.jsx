import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Airbnb from "./pages/Airbnb";
import Traveljournal from "./pages/Traveljournal";
import NotFound from "./pages/NotFound";
import Memegenerator from "./pages/Memegenerator"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Airbnb />} />
        <Route path="/Airbnb" element={<Airbnb />} />
        <Route path="/traveljournal" element={<Traveljournal />} />
        <Route path="/memegenerator" element={<Memegenerator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
