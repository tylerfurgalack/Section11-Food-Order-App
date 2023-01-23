import { Fragment } from 'react';
import mealsImage from '../../assest/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

import React from 'react';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table fill of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
