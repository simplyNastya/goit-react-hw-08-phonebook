import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selectors';

import items from './navbarMenuItems.json';

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);
  const menuItems = !isLogin ? items.filter(item => !item.private) : items;

  const elements = menuItems.map(({ id, link, text }) => {
    return (
      <li key={id}>
        <NavLink to={link}>{text}</NavLink>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default NavbarMenu;
