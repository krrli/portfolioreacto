import React, {FC} from 'react';
import Image from 'next/image';
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

    console.log(generalInfo)

//export default function Hello ({props}){

    {
        generalInfo.map((info: IHelloFields) => console.log())
    }

    return (
        <div >
            {generalInfo.map((info: IHelloFields) => (
                <div key={info.subtitle} className={styles.container}>
                    <div className={styles.portraitContainer}>
                        {/* */}
                        <Image
                            src={'https:'+ info.portfolioImage.fields.file.url}
                               width={info.portfolioImage.fields.file.details.image?.width}
                                height={info.portfolioImage.fields.file.details.image?.height}
                         alt={info.portfolioImage.fields.title}></Image>

                    </div>
                    <div className={styles.textContainer}>
                        {documentToReactComponents(info.introduction)}
                        <p className={styles.subtitle}>{info.subtitle}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Hello;

