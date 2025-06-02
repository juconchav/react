//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error/Error";
import Contacto from "./components/Contacto/Contacto";
import Productos from "./components/Productos/Productos";
import Home from "./components/Home/Home";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
