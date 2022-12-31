import Link from "next/link";
import Head from "next/head";
import styles from "./skills.module.scss"
import { fetchEntries } from '../util/contentfulPosts'
import Post from '../components/Post/Post'
import NavbarSelfmade from "../components/Navbar/NavbarSelfmade";
import Footer from "../components/Footer/Footer";


// @ts-ignore
export default function Skills({posts}) {
    return(
        <>
            <Head>
                <title>it's carla | Skills</title>
                <meta name="description" content="Skills der Carla :-)" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarSelfmade></NavbarSelfmade>
            <div className={styles.container}>
            <h1>Skills</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            </div>
            <br/>
            <br/>
            <div className={styles.post}>
                {posts.map((p: any) => {
                    //console.log(p);
                    return <Post key={p.date} date={p.date} image={p.fields} title={p.title} />

                })}
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const res = await fetchEntries()
    const posts = res!.map((p) => {
        return p.fields
    })

    return {
        props: {
            posts,
        },
    }
}
