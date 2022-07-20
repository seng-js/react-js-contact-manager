import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import Contacts from "./pages/Contacts";
import Companies from "./pages/Companies";
import {useEffect, useState} from "react";
import {getData, updateData} from "./services";

function App() {

    const [data, setData] = useState([]);

    const handleUpdateData = async (type, action, id) => {
        await updateData(id, action, type);
    }

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
                  <Route path="/contacts" element={<Contacts handleUpdateData={handleUpdateData} data={data} />} />
                  <Route path="/favorites" element={<Favorites handleUpdateData={handleUpdateData} data={data}  />} />
                  <Route path="/people" element={<People handleUpdateData={handleUpdateData} data={data}  />} />
                  <Route path="/companies" element={<Companies handleUpdateData={handleUpdateData} data={data}  />} />
              </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;
