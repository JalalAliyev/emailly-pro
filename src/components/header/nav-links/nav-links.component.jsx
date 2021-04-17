import React from 'react';
import { useSelector } from 'react-redux';
import Payments from '../../payments/payments.component';

import './nav-links.style.scss';

const NavLinks = ({ onClose }) => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return (
      <ul className="nav-links">
        <li onClick={onClose}>
          <a href="/auth/google">Sign in with Google</a>
        </li>
      </ul>
    );
  }
  return (
    <ul className="nav-links">
      {user ? (
        <>
          <li onClick={onClose}>
            <a href="/surveys">Add </a>
          </li>
          <li>
            <span>
              Credits: <i>{user.credits}</i>
            </span>
          </li>
          <li>
            <Payments />
          </li>
          <li onClick={onClose}>
            <a href="/api/logout">Log out</a>
          </li>
        </>
      ) : (
        <li onClick={onClose}>
          <a href="/auth/google">Sign in with Google</a>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
