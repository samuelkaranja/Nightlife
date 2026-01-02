import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Gallery, Home } from "./pages";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
