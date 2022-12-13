import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Repository from "./views/repository";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
