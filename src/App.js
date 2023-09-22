import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RestaurantsPage from "./Components/RestaurantsPage/RestaurantsPage";
import GoToTop from "./Components/GoToTop";

function App() {
  return (
    <div className="App" style={{ width: "1920px", overflowX: "hidden" }}>
      <BrowserRouter>
        <GoToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/ncr" element={<RestaurantsPage />} />
          </Routes>
        </GoToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
