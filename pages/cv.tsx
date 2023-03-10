import Link from "next/link";
import styles from './cv.module.scss';
import {ICvIntroFields, IJobFields} from "../@types/contentful";
import ContentService from "../util/content-service";
import {GetStaticProps, NextPage} from "next";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import NavbarSelfmade from "../components/Navbar/NavbarSelfmade";
import Footer from "../components/Footer/Footer";

// The props for our page component
interface Props {
    intro: ICvIntroFields[];
    jobs: IJobFields[];
}

const CV: NextPage<Props> = ({jobs, intro}) => {

    return (
        <>
                <NavbarSelfmade></NavbarSelfmade>
                <div key={Math.random()} className={styles.container}>
                    <div key={Math.random()} className={styles.introduction}>
                        {intro.map((intro) => (
                            <div key={Math.random()}>
                                {documentToReactComponents(intro.introduction)}
                            </div>
                        ))}
                    </div>


                    <div key={'cv-jobs'} className={styles.timelineContainer}>
                        {jobs.map((job) => (
                            <div key={job.title} className={styles.jobCardContainer}>
                                <div key={job.title +'1'} className={styles.jobCard}>
                                    <p><strong>{job.title}</strong>, {job.percentageText}</p>
                                    <p>{job.company} | {job.dateFrom} - {job.dateTo}</p>
                                    {documentToReactComponents(job.description)}
                                </div>
                            </div>


                        ))}
                    </div>
                </div>
                <Footer/>
        </>
    );
};


export default CV;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const jobs = (
        await ContentService.instance.getEntriesByType<IJobFields>("job")
    ).map((entry: any) => entry.fields);
    const intro = (
        await ContentService.instance.getEntriesByType<ICvIntroFields>("cvIntro")
    ).map((entry: any) => entry.fields);


    return {
        props: {
            jobs: jobs,
            intro: intro,
        },
    };
};