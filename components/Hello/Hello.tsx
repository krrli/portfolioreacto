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
                <div key={info.subtitle}>
                    {documentToReactComponents(info.introduction)}
                    <h2>{info.subtitle}</h2>
                </div>

            ))}
        </div>
    )
}

export default Hello;

