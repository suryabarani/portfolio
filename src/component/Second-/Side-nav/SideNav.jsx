import React, { useState } from "react";
import "./SideNav.css";
import {ChevronLast,CircleArrowRight,FolderKanban,House, Mail, SquareChevronRight, User} from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {
     const [open,setopen]=useState(false)

  React.useEffect(()=>{
    // set initial sidebar width CSS variable
    document.documentElement.style.setProperty('--sidebar-width','70px');
  },[])

     const menuItems = [
    {
      path: "/",
      name: "Home",
      icon: <House />,

    },
    {
      path: "/About",
      name: "About",
      icon: <User />,
    },
    {
      path: "/Skills",
      name: "Skills",
      icon: <ChevronLast />,
    },
    {
      path: "/Project",
      name: "Project",
      icon: <FolderKanban />,
    },
    {
      path: "/Contect",
      name: "Contect",
      icon: <Mail />,
    },
     ];
  return (
    <>
      <section className={`main ${open ? "open" : ""}`}>
        <div className="arrow">
          <SquareChevronRight onClick={() => {
            const newOpen = !open;
            setopen(newOpen);
            const width = newOpen ? '150px' : '70px';
            document.documentElement.style.setProperty('--sidebar-width', width);
          }} />
        </div>
        {menuItems.map((e,index) => {
          return (
            <nav className="nav" key={index}>
              <ul className="nav-item navs">
                <button className="btn">{e.icon}</button>
                <Link to={e.path}  className="a">
                  <li className="lis" >
                   {
                    open ? <div className="openone">{e.name}</div> :""
                   } 
                  </li>
                </Link>
              </ul>
            </nav>
          );
        })}
      </section>
    </>
  );
}

export default SideNav;
