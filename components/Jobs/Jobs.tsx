import React from 'react';
import styles from './Jobs.module.scss';
import {ContentfulService} from "../../core/contentful";
import {Job} from "../../interfaces/job";

type Props = {
    job: Job;
};

const Jobs = (props: Props) => {

    const {job} = props;

    return (
        <>
            <div className={styles.container}>
                <p>hello this is jobs</p>
                <p>{job.title}</p>

            </div>

        </>
    );
};

Jobs.getInitialProps = async () => {

    // define contentful service instance
    const contentfulService = new ContentfulService();

    //const {post} = this.query;
    const jobs = await contentfulService.getAllJobs();

    return {jobs};
};

export default Jobs;
