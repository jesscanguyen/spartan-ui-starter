import { NavLink } from "react-router-dom";
import { LuComponent } from "react-icons/lu";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">
        <LuComponent /> Spartan UI
      </h2>
      <h4>Components</h4>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/badge" className="sidebar-link">
            Badge
          </NavLink>
        </li>
        <li>
          <NavLink to="/button" className="sidebar-link">
            Button
          </NavLink>
        </li>
        <li>
          <NavLink to="/card" className="sidebar-link">
            Card
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
