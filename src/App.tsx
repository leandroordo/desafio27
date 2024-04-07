import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Home from "./components/home";
import Catalog from "./components/catalog";
import MovieDetail from "./components/movieDetail";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="mask">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog">
              <Route index element={<Catalog />} />
              <Route path=":movieId" element={<MovieDetail />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
