import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";
import {useEffect} from "react";
import {getInitDataHandler} from "./services";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        getInitDataHandler(dispatch).catch(error => {
            console.log('Error loading data: ' + error);
        });
    });
    
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/favorites" element={<Favorites  />} />
                  <Route path="/people" element={<People />} />
                  <Route path="/companies" element={<Companies  />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
