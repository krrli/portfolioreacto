import React from 'react';
import {ICvIntroFields, IJobFields, IProjectFields} from "../../@types/contentful";
import styles from "./ProjectDetail.module.scss"
import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

interface Props {
    project: IProjectFields;
}

const ProjectDetail = (props: Props) => {
    const {project} = props;



    return (
        <div className={styles.container}>
            {project.logo &&
            <div className={styles.imageContainer}>
                <Image
                src={'https:'+ project.logo.fields.file.url}
                width={project.logo.fields.file.details.image?.width}
                height={project.logo.fields.file.details.image?.height}
                alt={project.logo.fields.title}></Image>
            </div>}
            <div className={styles.textContainer}>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectCompany}>{project.company}</div>
                <div className={styles.dates}>{project.yearFrom} - {project.yearEnd}</div>
                {project.description &&
                    <div className={styles.projectDescription}>{documentToReactComponents(project.description)}</div>
                }
            </div>

            {/*

                    <p>todo: urls</p>
                    <p>todo: buzzwords</p>
            */}

        </div>


    );
};

export default ProjectDetail;