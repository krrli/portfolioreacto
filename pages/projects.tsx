import Link from "next/link";
import Head from "next/head";

export default function Projects() {
    return(
        <>
            <Head>
                <title>it's carla | Projekte</title>
                <meta name="description" content="Projekte der Carla" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Projekte</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}
