import React, { useState, useEffect } from "react";
import "./SideNav.css";
import {
  ChevronLast,
  Menu,
  X,
  FolderKanban,
  House,
  Mail,
  SquareChevronRight,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {
  const [open, setOpen] = useState(false);       // desktop sidebar open/collapsed
  const [mobileOpen, setMobileOpen] = useState(false); // mobile dropdown open/closed
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleChange = (e) => {
      setIsMobile(e.matches);
      setOpen(false);
      setMobileOpen(false);
    };
    handleChange(mq);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const width = open ? "150px" : "70px";
      document.documentElement.style.setProperty("--sidebar-width", width);
    }
  }, [open, isMobile]);

  const menuItems = [
    { path: "/", name: "Home", icon: <House /> },
    { path: "/About", name: "About", icon: <User /> },
    { path: "/Skills", name: "Skills", icon: <ChevronLast /> },
    { path: "/Project", name: "Project", icon: <FolderKanban /> },
    { path: "/Contect", name: "Contect", icon: <Mail /> },
  ];

  const renderMenuItems = (isDropdown) =>
    menuItems.map((e, index) => (
      <nav className="nav" key={index}>
        <ul className="nav-item navs">
          <button className="btn">{e.icon}</button>
          <Link
            to={e.path}
            className="a"
            onClick={() => isDropdown && setMobileOpen(false)}
          >
            <li className="lis">
              {(isDropdown || open) ? <div className="openone">{e.name}</div> : ""}
            </li>
          </Link>
        </ul>
      </nav>
    ));

  return (
    <>
      {/* -------- DESKTOP SIDEBAR -------- */}
      <section className={`main ${open ? "open" : ""}`}>
        <button
          className="arrow"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle sidebar"
        >
          <SquareChevronRight />
        </button>
        {renderMenuItems(false)}
      </section>

      {/* -------- MOBILE TOP NAVBAR -------- */}
      <header className="topnav">
        <span className="topnav-title">MyLogo</span>
        <button
          className="topnav-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>
      <div className={`topnav-dropdown ${mobileOpen ? "open" : ""}`}>
        {renderMenuItems(true)}
      </div>
    </>
  );
}

export default SideNav;