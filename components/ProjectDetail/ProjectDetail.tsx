import React from 'react';
import {ICvIntroFields, IJobFields, ILinksFields, IProjectFields} from "../../@types/contentful";
import styles from "./ProjectDetail.module.scss"
import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {BLOCKS, Document, INLINES, MARKS} from '@contentful/rich-text-types';
import {options} from "tsconfig-paths/lib/options";

interface Props {
    project: IProjectFields;
}


const ProjectDetail = (props: Props, document: Document) => {
    const {project} = props;

    const website_url = 'https://carla.land'


    const renderOptions = {
        renderText: (text: string) => {
            return text.split('\n').reduce((children: any, textSegment: any, index: React.Key | null | undefined) => {
                return [...children, index! > 0 && <br key={index} />, textSegment];
            }, []);
        }
    };

    const options = {
        renderNode: {
            [INLINES. HYPERLINK]: (node: { data: { uri: string; }; content: any; }, next: (arg0: any) => any) => {
                return `<a href="${node.data.uri}"${node.data.uri.startsWith('https://mydomain.com') ? '' : ' target="_blank"'}>${next(node.content)}</a>`;
            }
        }
    }

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
                    <>

                        <div
                            className={styles.projectDescription}>{documentToReactComponents(project.description, renderOptions)}
                        </div>

                    </>
                }
                {/*
                {project.projectLinks &&
                    <>
                        **** hier:
                    {project.projectLinks.map((link) => {
                        <a href={link.fields.url}>klick </a>
                    } )}

                        <div
                            className={styles.projectLinks}>{}
                        </div>

                    </>
                }*/}
            </div>

            {/*

                    <p>todo: urls</p>
                    <p>todo: buzzwords</p>
            */}

        </div>


    );
};

export default ProjectDetail;