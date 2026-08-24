import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CoinDetail } from "./pages/CoinDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
