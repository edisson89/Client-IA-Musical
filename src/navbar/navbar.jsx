/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../assets/Entre Cuerdas logo.png";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const Navbar = ({ screenWidth }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < screenWidth);
    };
    handleResize(); // Verificar el tamaño de la pantalla inicialmente

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  function next(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      {isMobileMenu ? (
        !isModalOpen ? (
          <div className={styles.navbar}>
          <div className={styles.imageBackground}>
              <NavLink to="/">
                <img className={styles.logo} src={logo} />
              </NavLink>
            </div>
          <div className={styles.modal}>
            <button onClick={openModal}>Menu</button>
          </div>
          </div>
        ) : (
          <>
            <div className={styles.modal} isopen={isModalOpen} onclose={closeModal}
            >
            <div className={styles.imageBackground}>
              <NavLink to="/">
                <img className={styles.logo} src={logo} />
              </NavLink>
            </div>
            <div className={styles.navigationContainer}>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/about"
              >
                <button>Nosotros</button>
              </NavLink>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/programas"
              >
                <button>Programas</button>
              </NavLink>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/galeria"
              >
                <button>Galería</button>
              </NavLink>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/blog"
              >
                <button>Blog</button>
              </NavLink>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/tienda"
              >
                <button>Tienda</button>
              </NavLink>
              <NavLink
                className={styles.navigationList}
                onClick={() => next("nav")}
                to="/contacto"
              >
                <button>Contacto y donaciones</button>
              </NavLink>
            </div>
            <button onClick={closeModal}>Cerrar Menu</button>
            </div>
          </>
        )
      ) : (
        <>
        <div className={styles.navbar}>
          <div className={styles.imageBackground}>
            <NavLink to="/">
              <img className={styles.logo} src={logo} />
            </NavLink>
          </div>
          <div className={styles.navigationContainer}>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/about"
            >
              <button>Nosotros</button>
            </NavLink>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/programas"
            >
              <button>Programas</button>
            </NavLink>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/galeria"
            >
              <button>Galería</button>
            </NavLink>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/blog"
            >
              <button>Blog</button>
            </NavLink>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/tienda"
            >
              <button>Tienda</button>
            </NavLink>
            <NavLink
              className={styles.navigationList}
              onClick={() => next("nav")}
              to="/contacto"
            >
              <button>Contacto y donaciones</button>
            </NavLink>
          </div>
          </div>
        </>
      )}
    </>
  );
};
Navbar.propTypes ={
  screenWidth: PropTypes.number

}
export default Navbar;
