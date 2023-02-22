import React from 'react';
import {Link} from "react-router-dom";
import cn from "./Footer.module.scss";


const Footer = () => {
  return (
    <footer className={cn.footer}>
      <div className={cn.wrapper}>
          <Link
            to="/">
            GameStore
          </Link>
        <span>&copy; Copyright 2023 Konst_V</span>
      </div>
    </footer>
  );
};

export default Footer;