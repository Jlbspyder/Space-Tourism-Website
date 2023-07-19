import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  return (
    <div className="home">
      <div>
        <img src="/assets/shared/logo.svg" alt="logo" className="logo" />
      </div>
      <div className="nav-line"></div>
      <button className="mobile-menu">
        {!openMenu && (
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="hamburger"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {openMenu && (
          <img
            src="/assets/shared/icon-close.svg"
            alt="close"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
      </button>
      <nav>
        <ul className={!openMenu ? "navigation" : "navigation active"}>
          <li
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              <span>00</span>
              home
            </Link>
          </li>
          <li
            className={location.pathname === "/destination" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            <Link
              className={location.pathname === "/destination" ? "active" : ""}
              to="/destination"
            >
              <span>01</span>
              destination
            </Link>
          </li>
          <li
            className={location.pathname === "/crew" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            <Link
              className={location.pathname === "/crew" ? "active" : ""}
              to="/crew"
            >
              <span>02</span>
              crew
            </Link>
          </li>
          <li
            className={location.pathname === "/technology" ? "active" : ""}
            onClick={() => setOpenMenu(false)}
          >
            <Link
              className={location.pathname === "/technology" ? "active" : ""}
              to="/technology"
            >
              <span>03</span>
              technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
