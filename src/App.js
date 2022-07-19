import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";

function App() {
    
    const handleUpdateData = (type, action, id) => {
        console.log(type, action, id);
    }
    
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacts" element={<Contacts handleUpdateData={handleUpdateData} />} />
                  <Route path="/favorites" element={<Favorites handleUpdateData={handleUpdateData} />} />
                  <Route path="/people" element={<People handleUpdateData={handleUpdateData} />} />
                  <Route path="/companies" element={<Companies handleUpdateData={handleUpdateData} />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
