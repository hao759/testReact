import "./Nav.scss";
// import "./Product.scss";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <NavLink exact to="/home">
        Home
      </NavLink>
      <NavLink to="/weather">weather</NavLink>
      <NavLink to="/users">User</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/OTP">OTP</NavLink>
      {/* / match nen chay het */}
    </ul>
  );
};
export default Nav;
