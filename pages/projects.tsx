import Head from "next/head";
import styles from "./projects.module.scss";
import React, {useState} from 'react';
import NavbarSelfmade from "../components/Navbar/NavbarSelfmade";
import Footer from "../components/Footer/Footer";
import {GetStaticProps, NextPage} from "next";
import {IProjectFields} from "../@types/contentful";
import ContentService from "../util/content-service";
import Image from "next/image";
import Masonry from 'react-masonry-css'
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";


interface Props {
    projects: IProjectFields[];
}

const Projects: NextPage<Props> = ({projects}) => {
//export default function Projects() {
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [modalData, setModalData] = useState(projects[0]);

    const breakpointColumnsObj = {
        default: 3,
        900: 3,
        760: 2,
        500: 1
    };


    const handleClick = () => {
        console.log('dialog is visible', dialogVisible);
        setDialogVisible(!dialogVisible);
    };

    const openDetail = (project: IProjectFields) => {
        console.log('open modal with project ', project.title);
    };

    const splitTags = (tags: string) => {

    }

    return (
        <>
            <Head>
                <title>it's carla | Projekte</title>
                <meta name="description" content="Projekte der Carla"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavbarSelfmade></NavbarSelfmade>
            <div className={styles.container}>
                <Masonry className={styles.masonryGrid}
                         breakpointCols={breakpointColumnsObj}
                         columnClassName={styles.masonryGridColumn}>
                    {projects.map((project) =>


                        <div key={Math.random()} className={styles.projectCard}>
                            {/*
                            <button className={styles.hiddenButton} onClick={(detail) => openDetail}>
                            */}
                            <button className={styles.hiddenButton} onClick={() => {
                                onOpenModal();
                                setModalData(project);
                            }}>
                                <div className={styles.imageContainer}>
                                    {project.logo &&
                                        <Image
                                            src={'https:' + project.logo.fields.file.url}
                                            width={project.logo.fields.file.details.image?.width}
                                            height={project.logo.fields.file.details.image?.height}
                                            alt={project.logo.fields.title}></Image>}
                                </div>
                                <div className={styles.projectTextContainer}>
                                    <div className={styles.projectTitle}>{project.title}</div>
                                    <div className={styles.projectCompany}>{project.company}</div>
                                    {project.descriptionShort && (
                                        <div className={styles.projectDescriptionShort}>{project.descriptionShort}</div>
                                    )}

                                </div>
                                {project.projectTags &&
                                    <div className={styles.projectTagsContainer}>

                                        {project.projectTags.split(/[,]+/).map((prj) =>
                                            <span className={styles.projectTag}>
                                                {prj}
                                            </span>
                                        )}
                                    </div>
                                }

                            </button>
                        </div>
                    )}
                </Masonry>

                <Modal key={Math.random()} open={open} onClose={onCloseModal} center>
                    <ProjectDetail project={modalData}></ProjectDetail>
                </Modal>
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