import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import MainHeader from '../main-header/main-header.component';
import NavLinks from '../nav-links/nav-links.component';
import SideDrawer from '../side-drawer/side-drawer.component';
import { GiHamburgerMenu } from 'react-icons/gi';

import './main-navigation.style.scss';

const MainNavigation = () => {
  const user = useSelector((state) => state.auth.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const changeDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <React.Fragment>
      <SideDrawer show={isDrawerOpen} onClose={changeDrawer}>
        <nav className="main-navigation_drawer-nav">
          <NavLinks onClose={changeDrawer} />
        </nav>
      </SideDrawer>
      <MainHeader>
        <h3 className="main-navigation__title">
          <NavLink to={user ? '/surveys' : '/'}>
            <i>Emailly</i>
          </NavLink>
        </h3>
        <button className="main-navigation__menu-btn">
          <GiHamburgerMenu
            onClick={changeDrawer}
            style={{ color: 'white', fontSize: '1.6rem' }}
          />
        </button>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
