import "./NavBar.css";
import "animate.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="has-background-black" id="navbar" >
            <Link to="/">
                Home
            </Link>

            <NavLink to={`/category/graficas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>GRAFICAS</h4></NavLink>
            <NavLink to={`/category/hardware`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}> <h4>HARDWARE</h4></NavLink>
            <NavLink to={`/category/procesadores`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4>PROCESADORES</h4></NavLink>
            <NavLink to={`/category/pcarmadas`} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}><h4> PC ARMADAS</h4></NavLink>

            <CartWidget/>

        </nav >

    )

}

export default NavBar;