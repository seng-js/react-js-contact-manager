import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";
import {useEffect, useState} from "react";
import {getData} from "./services";

function App() {

    const [data, setData] = useState([]);

    const fetchData = () => {
        return getData().then((response) => setData(response.data));}

    useEffect(() => {
        fetchData();
    }, [data]);
    
    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contacts" element={<Contacts data={data} />} />
                  <Route path="/favorites" element={<Favorites data={data}  />} />
                  <Route path="/people" element={<People data={data}  />} />
                  <Route path="/companies" element={<Companies data={data}  />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
