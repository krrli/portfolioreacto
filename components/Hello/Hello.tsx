import React from 'react';
import {inspect} from "util";
import styles from "./Hello.module.scss"
import {IHelloFields} from "../../@types/contentful";
import {GetStaticProps, NextPage} from "next";
import ContentService from "../../util/content-service";


/*
const Hello = () => {
    return (
        <div className={styles.container}>
            Hello
        </div>
    );
};

 */

interface Props {
    generalInfo: IHelloFields[];
}

const Hello: NextPage<Props> = ({ generalInfo }) => (
    <div>
        <h1>hoi</h1>

    </div>
);
export default Hello;

