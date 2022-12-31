
import React, { useState } from 'react';
import styles from './NavbarSelfmade.module.scss';
import {NavLink} from "react-router-dom";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";




const NavbarSelfmade = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const classNamePopup = ['popupMenu', navbarOpen ? 'show' : 'hide'].join(' ')
    function classNames(...args: any[]) {
        return args.filter(Boolean).join(' ')
    }


    return (
        <>
                <div className={styles.navContainer}>

                    <Link href="/"><div className={styles.navTitle}>Carla Iten</div></Link>
                    <div className={styles.nav}>
                        {/*
                        <button className={styles.menuButton} onClick={handleToggle}>
                            {navbarOpen ?
                                <CgClose className={styles.navBurger} />
                                : <FiMenu className={styles.navBurger} />}
                        </button>
                        */}
                        <Link className={styles.navItem} href="/cv">CV</Link>
                        {/*
                        <Link className={styles.navItem} href="/skills">Skills</Link>
                        */}
                        <Link className={styles.navItem} href="/projects">Projekte</Link>
                    </div>
                    {/*
                    <div className={styles.popup + classNames('popup', navbarOpen && 'show')}>
                        <Link className={styles.navItemPopup} href="/cv">CV</Link>
                        <Link className={styles.navItemPopup} href="/skills">Skills</Link>
                        <Link className={styles.navItemPopup} href="/projects">Projekte</Link>
                    </div>
                    */}

                </div>


        </>
    );
};

export default NavbarSelfmade;

