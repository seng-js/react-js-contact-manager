import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/people" element={<People />} />
                  <Route path="/companies" element={<Companies />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
