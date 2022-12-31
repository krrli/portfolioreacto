
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";




const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
                <div className={styles.navContainer}>

                    <Link href="/"><h1>Carla Iten</h1></Link>
                    <div className={styles.nav}>
                        <button className={styles.menuButton} onClick={handleToggle}>
                            {navbarOpen ?
                                <CgClose className={styles.navBurger} />
                                : <FiMenu className={styles.navBurger} />}
                        </button>
                        <Link className={styles.navItem} href="/cv">CV</Link>
                        {/*
                        <Link className={styles.navItem} href="/skills">Skills</Link>
                        */}
                        <Link className={styles.navItem} href="/projects">Projekte</Link>
                    </div>
                    {/*
                    <div className={styles.popupMenu + (navbarOpen ? 'show' : 'hidden')}>
                        <Link className={styles.navItemPopup} href="/cv">CV</Link>
                        <Link className={styles.navItemPopup} href="/skills">Skills</Link>
                        <Link className={styles.navItemPopup} href="/projects">Projekte</Link>
                    </div>
                   */}
                </div>


        </>
    );
};

export default Navbar;