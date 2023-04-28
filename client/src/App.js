import "./components/Style.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from './components/Favorites'
// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "a417fc96b973.5d346bf94ed39d4f025e";

const email = "hola@gmail.com";
const password = "123asd";

function App() {
  
  const [requestedId, setRequestedId] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
   
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setRequestedId((oldIds) => [...oldIds, id]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };
  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate('/home')
    }
  };

  const logout = () => {
    setAccess(false);
    navigate('/')
  };


  useEffect(()=>{
    !access && navigate('/');
  },[access, navigate]);

 

  return (
     <div className="App">

      
      {location.pathname !== "/" && <Nav onSearch={[onSearch, logout]} />}
      <Routes>
       
        <Route path="/" element={[<Form login={login}></Form>]}></Route>
        <Route
          path="/Home"
          element={[<Cards characters={characters} onClose={onClose} />]}
          />
        <Route path="/About" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
