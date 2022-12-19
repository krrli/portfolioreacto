
import React from 'react';
import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Link from "next/link";



const Navbar = () => {
    return (
        <>
            <main className={styles.nav}>
                <div className={styles.card}>
                    <Link href="/cv"><p>Check out CV</p></Link>
                </div>
                <div className={styles.card}>
                    <Link href="/skills"><p>Check out Skills</p></Link>
                </div>
                <div className={styles.card}>
                    <Link href="/projects"><p>Check out Projekte</p></Link>
                </div>
            </main>
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
