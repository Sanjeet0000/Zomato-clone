import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RestaurantsPage from "./Components/RestaurantsPage/RestaurantsPage";

function App() {
  return (
    <div className="App" style={{ width: "1920px", overflowX: "hidden" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/ncr" element={<RestaurantsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
