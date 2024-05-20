import { useEffect, useState, useRef } from "react";
import "./Navigation.scss";
import logo from "../../assets/logo/massage.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      setShowNav(scrollY <= scrollThreshold);
      if (isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="nav"
      style={{ opacity: showNav ? 1 : 0, transition: "opacity 0.5s" }}
    >
      <img
        className="nav__logo"
        alt={"Relax massage surrey logo, a sketch of the back of a woman"}
        src={logo}
      />

      <div className="hamburger" onClick={handleToggle}>
        <span></span>
      </div>

      <ul className={`list ${isOpen ? "open" : ""} `}>
        <li className="list__item">
          <a className="list__link" href="#home">
            Home
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="#services">
            Services
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="#about">
            About
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="#contact">
            Contact
          </a>
        </li>

      </ul>
      <a href="#contact" className="nav__contact">Book Appointment</a>

    </nav>
  );
}

export default Navigation;
