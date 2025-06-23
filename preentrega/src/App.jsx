import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Error from "./components/Error/Error";
import Contacto from "./components/Contacto/Contacto";
import Productos from "./components/Productos/Productos";
import Home from "./components/Home/Home";
import Nosotros from "./components/Nosotros/Nosotros";
import Works from "./components/Works/Works";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/productodetail" element={<ProductDetails/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
