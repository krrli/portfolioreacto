import Link from "next/link";
import Head from "next/head";
import styles from "./projects.module.scss";
import React, {FunctionComponent, Fragment, ReactNode, useState} from 'react';
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import {GetStaticProps, NextPage} from "next";
import {ICvIntroFields, IJobFields, IProjectFields} from "../@types/contentful";
import ContentService from "../util/content-service";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Masonry from 'react-masonry-css'
import {text} from "stream/consumers";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal/Modal";





interface Props {
    projects: IProjectFields[];
}

const Projects: NextPage<Props> = ({projects}) => {
//export default function Projects() {
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        760: 2,
        500: 1
    };
    const { isOpen, toggle } = useModal();


    const handleClick = () => {
        console.log('dialog is visible', dialogVisible);
        setDialogVisible(!dialogVisible);
    };

    const openDetail = (project: IProjectFields) => {
        console.log('open modal with project ', project.title);
    };

    return(
        <>
            <Head>
                <title>it's carla | Projekte</title>
                <meta name="description" content="Projekte der Carla" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <div className={styles.container}>
                <Masonry className={styles.masonryGrid}
                         breakpointCols={breakpointColumnsObj}
                         columnClassName={styles.masonryGridColumn}>
                    {projects.map((project) =>


                        <div key={Math.random()} className={styles.projectCard}>
                            <button className={styles.hiddenButton} onClick={toggle}>
                                <div className={styles.imageContainer}>
                                {project.logo &&
                                <Image
                                    src={'https:'+ project.logo.fields.file.url}
                                    width={project.logo.fields.file.details.image?.width}
                                    height={project.logo.fields.file.details.image?.height}
                                    alt={project.logo.fields.title}></Image>}
                                </div>
                                <div className={styles.projectTextContainer}>
                                    <div className={styles.projectTitle}>{project.title}</div>
                                    <div className={styles.projectCompany}>{project.company}</div>
                                    { project.description && <div className={styles.projectDescriptionShort}>{project.descriptionShort}</div>}

                                </div>
                            </button>
                            {/*
                            <button onClick={toggle}>Open Modal </button>
                            <Modal isOpen={isOpen} toggle={toggle}>
                            </Modal>
                            */}
                        </div>



                    )}
                </Masonry>

                {/*

                {projects.map((project) => (
                    <div className={styles.jobCardContainer}>
                        <div key={project.title} className={styles.projectCard}>
                            {project.logo &&
                                <Image
                                    src={'https:'+ project.logo.fields.file.url}
                                    width={project.logo.fields.file.details.image?.width}
                                    height={project.logo.fields.file.details.image?.height}
                                    alt={project.logo.fields.title}></Image>}
                            <p>{project.title}</p>
                            <p>{project.company}</p>
                            <p>{project.yearFrom} - {project.yearEnd}</p>
                            {project.descriptionShort &&
                                <p>{project.descriptionShort}</p>
                            }
                            <p>todo: urls</p>
                            <p>todo: buzzwords</p>

                            <p>todo: move to popup</p>
                            {documentToReactComponents(project.description)}
                        </div>
                    </div>
                ))}
                */}
            </div>
            <Footer/>
        </>
    );
}

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projects = (
        await ContentService.instance.getEntriesByType<IProjectFields>("project")
    ).map((entry: any) => entry.fields);

    return {
        props: {
            projects: projects,
        },
    };
};