import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Events, Gallery, Home } from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
