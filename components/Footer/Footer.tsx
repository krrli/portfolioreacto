import React from 'react';
import styles from './Footer.module.scss';

import {BiCoffee, BiHeart, BiCodeAlt, } from 'react-icons/bi'
import {BsLinkedin, BsGithub } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstRow}>
                <BiCodeAlt/> with <BiHeart/> and <BiCoffee/> by <a href="mailto:hoi@carla.land">
                    Carla Iten</a>
            </div>
            <div className={styles.secondRow}>
                <a href={'https://www.linkedin.com/in/carla-iten-a59210122/'} target={"_blank"}><BsLinkedin/></a>
                <a href={'https://github.com/krrli'} target={"_blank"}><BsGithub/></a>

            </div>
        </div>
    );
};

export default Footer;