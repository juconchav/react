import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import "../components/NavBar/NavBar.css";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="logo" src={logo} alt="Logo de la marca" />
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
          <li>
            <Link to={"/contacto"}>Contacto</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
