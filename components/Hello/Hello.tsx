import React from 'react';
import {inspect} from "util";
import styles from "./Hello.module.scss"

const Hello = () => {
    return (
        <div className={styles.container}>
            Hello
        </div>
    );
};

export default Hello;