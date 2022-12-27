import Link from "next/link";
import Head from "next/head";
import styles from "./projects.module.scss";
import React, {FunctionComponent, Fragment, ReactNode} from 'react';
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/Navbar/NavBar";


type Props = {
    children: ReactNode;
}


export default function Projects() {
    return(
        <>
            <Head>
                <title>it's carla | Projekte</title>
                <meta name="description" content="Projekte der Carla" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <h1>Projekte</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <div className={styles.container}>

            </div>
        </>
    );
}
