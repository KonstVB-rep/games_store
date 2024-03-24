import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { pathNavLinks } from '../../utils/pathLinks';
import cn from './styles.module.scss';

const NavList = ({ isShow, setIsShow }) => {
    const renderNavLinks = pathNavLinks.map((item) => (
        <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? `${cn.link} ${cn.active_link}` : `${cn.link}`)}
            onClick={() => setIsShow(false)}
        >
            <span>{item.title}</span>
        </NavLink>
    ));

    return (
        <>
            <nav className={`${cn.nav} ${cn.desktop}`}>{renderNavLinks}</nav>
            <AnimatePresence>
                {isShow && (
                    <motion.nav
                        className={`${cn.nav} ${cn.nav_mobile}`}
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ y: '-100%', opacity: 0 }}
                    >
                        {renderNavLinks}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavList;
