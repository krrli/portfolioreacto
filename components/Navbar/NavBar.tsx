
import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Link from "next/link";



const Navbar = () => {
    return (
        <>

                <div className={styles.navContainer}>

                    <Link href="/"><h1>Carla Iten</h1></Link>

                    <div className={styles.nav}>
                        <Link className={styles.navItem} href="/cv">CV</Link>
                        <Link className={styles.navItem} href="/skills">Skills</Link>
                        <Link className={styles.navItem} href="/projects">Projekte</Link>
                    </div>
                </div>

            {/*
            <div className={styles.nav}>
                <NavLink to='/about'>
                    About
                </NavLink>
            </div>
            */}

        </>
    );
};

export default Navbar;
