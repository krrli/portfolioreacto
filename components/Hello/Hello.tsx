import React, {FC} from 'react';
import {IHelloFields} from "../../@types/contentful";
import styles from "./Hello.module.scss"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {Document} from "@contentful/rich-text-types";


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

const Hello: FC<Props> = (props) => {

    const {
        generalInfo
    } = props;

//export default function Hello ({props}){

    {
        generalInfo.map((info: IHelloFields) => console.log())
    }

    return (
        <div className={styles.container}>
            {generalInfo.map((info: IHelloFields) => (
                <div key={info.subtitle} className={styles.textContainer}>
                    {documentToReactComponents(info.introduction)}
                    <h4 className={styles.subtitle}>{info.subtitle}</h4>
                </div>

            ))}
        </div>
    )
}

export default Hello;

