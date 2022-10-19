import React from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import useWindowDimensions from './useWindowDimensions.js';

const urlHome = (path) => {
  if (path === 'en' || path === 'cz') {
    return '';
  } else {
    return path;
  }
};

// const productsMenu = (
//   <Menu>
//     <Menu.Item className="status-item">
//       <NavLink to="/products">All Categories</NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink exact to="/saws">
//         Saws
//       </NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink to="/routers">Copy Routers</NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink to="/milling">End Milling</NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink to="/profile">Profile Machining</NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink to="/crimping">Corner Crimping</NavLink>
//     </Menu.Item>
//   </Menu>
// );

// const serviceMenu = (
//   <Menu>
//     <Menu.Item className="status-item">
//       <NavLink to="/service#support">Technical Service</NavLink>
//     </Menu.Item>
//     <Menu.Item className="status-item">
//       <NavLink to="/service#purchase">Purchase of Machinery</NavLink>
//     </Menu.Item>
//   </Menu>
// );

function Navbar() {
  const location = useLocation();
  const url = location.pathname.split('/');

  console.log(location);
  console.log(url);

  const { height, width } = useWindowDimensions();

  const active =
    url[2] === 'saws' || url[2] === 'routers' || url[2] === 'machines';

  const statusClassName = 'ant-dropdown-link ' + active;

  const breakpoints = {
    xs: 0,
    sm: 576,
    md: 790,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  };

  if (width > breakpoints.md) {
    if (url[1] === 'en') {
      return (
        <div className="app-header">
          <div className="AppHeader-nav">
            <div className="AppHeader-nav-inner">
              <a href="/" rel="home" style={{ marginLeft: '3vw' }}>
                <img src="logo.svg" height={50}></img>
              </a>
              <div className="AppHeader-nav-inner-links">
                {/* <a href="#home">Home</a> */}
                <a className="nav-link" href="#about-us">
                  About&nbsp;Us
                </a>
                <a className="nav-link" href="#services">
                  Industries
                </a>
                <a className="nav-link" href="#partners">
                  Partners
                </a>
                <a className="nav-link" href="#contact-us">
                  Contact&nbsp;Us
                </a>
              </div>
              <div className="language-icon">
                <NavLink to={'/cz' + urlHome(url[url.length - 1])}>
                  <img
                    src="/CzechFlag.png"
                    style={{ height: '20px', width: '20px' }}
                  ></img>
                </NavLink>
                <NavLink to={'/en' + urlHome(url[url.length - 1])}>
                  <img
                    src="/EnglishFlag.png"
                    style={{ height: '20px', width: '20px' }}
                  ></img>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="app-header">
          <div className="AppHeader-nav">
            <div className="AppHeader-nav-inner ">
              <a href="/" rel="home">
                <img src="logo.svg" height={40}></img>
              </a>
              <div className="AppHeader-nav-inner-links">
                {/* <a className="nav-link" href="#home">
                  Domov
                </a> */}
                <a className="nav-link" href="#about-us">
                  O&nbsp;Nás
                </a>
                <a className="nav-link" href="#services">
                  Současná&nbsp;Odvětví
                </a>
                <a className="nav-link" href="#partners">
                  Partneři
                </a>
                <a className="nav-link" href="#contact-us">
                  Kontaktujte&nbsp;Nás
                </a>
              </div>
              <div className="language-icon">
                <NavLink to={'/cz' + urlHome(url[url.length - 1])}>
                  <img
                    src="/CzechFlag.png"
                    style={{ height: '20px', width: '20px' }}
                  ></img>
                </NavLink>
                <NavLink to={'/en' + urlHome(url[url.length - 1])}>
                  <img
                    src="/EnglishFlag.png"
                    style={{ height: '20px', width: '20px' }}
                  ></img>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="app-header">
        <div className="AppHeader-nav">
          <div className="AppHeader-nav-inner-mobile">
            <a href="/" rel="home">
              <img src="logo.svg" height={40}></img>
            </a>
            <NavLink to={'/cz' + urlHome(url[url.length - 1])}>
              <img
                src="/CzechFlag.png"
                style={{ height: '20px', width: '20px' }}
              ></img>
            </NavLink>
            <NavLink to={'/en' + urlHome(url[url.length - 1])}>
              <img
                src="/EnglishFlag.png"
                style={{ height: '20px', width: '20px' }}
              ></img>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
