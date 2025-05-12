import "./NavBar.css";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
      <nav className="navbar">
      <div>
          <img className="logo" src={logo} alt="Logo de la marca" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <CartWidget/>
  </nav>
    );
  }
  
  export default NavBar;