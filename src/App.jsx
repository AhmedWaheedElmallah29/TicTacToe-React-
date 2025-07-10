import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Xo3 from "./pages/Xo3";
import Xo5 from "./pages/Xo5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/3" element={<Xo3 />} />
        <Route path="/5" element={<Xo5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
