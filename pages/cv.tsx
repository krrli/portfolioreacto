import Link from "next/link";
import styles from './cv.module.scss';
import { IJobFields} from "../@types/contentful";
import ContentService from "../util/content-service";
import {GetStaticProps, NextPage} from "next";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

// The props for our page component
interface Props {
    jobs: IJobFields[];
    //articles: IArticleFields[];
}

const CV: NextPage<Props> = ({jobs}) => {

    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className={styles.container}>
                    <div className={styles.introduction}>
                    <p>Seit 2011 befasse ich mich damit, wie ich Benutzerinnen und Benutzern, Kundinnen und Kunden mit
                        meiner Arbeit als Softwareentwicklerin das Leben vereinfache. Durch mein analytisches Denken und
                        meine Neugierde kann ich mich jeweils rasch in neue Projekte und Technologien einarbeiten. Mein
                        offener Kommunikationsstil erlaubt mir, mich schnell und erfolgreich in neue Teams einzubringen. Die
                        Tätigkeiten bei drei Softwareunternehmen ermöglichten mir, vielfältige Erfahrungen zu sammeln. Durch
                        das Informatik-Studium an der Hochschule Luzern konnte ich bereits bestehendes Wissen vertiefen und
                        in den Bereichen Software Engineering und Architektur viel dazulernen.</p>
                    </div>



                    <div className={styles.timelineContainer}>
                        {jobs.map((job) => (

                            <div key={job.title} >                                <p><strong>{job.title}</strong>, {job.percentageText}</p>
                                <p>{job.company} | {job.dateFrom} - {job.dateTo}</p>
                                {documentToReactComponents(job.description)}
                            </div>

                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};


export default CV;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const jobs = (
        await ContentService.instance.getEntriesByType<IJobFields>("job")
    ).map((entry: any) => entry.fields);

    return {
        props: {
            jobs: jobs,
        },
    };
};