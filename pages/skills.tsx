import Link from "next/link";
import Head from "next/head";
import {inspect} from "util";
import styles from "./skills.module.scss"

export default function Skills() {
    return(
        <>
            <Head>
                <title>it's carla | Skills</title>
                <meta name="description" content="Skills der Carla :-)" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
            <h1>Skills</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            </div>
        </>
    );
}
