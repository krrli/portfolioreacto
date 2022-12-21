import Link from "next/link";
import styles from './cv.module.scss';
import jobs from "../components/Jobs/Jobs";
import Jobs from "../components/Jobs/Jobs";
import {Job} from "../interfaces/job";

export default function CV() {


    return(
        <>
            <div>
                Check out Contentful API
            </div>
            <div className={styles.container}>
                <h1>CV</h1>
                <p>Seit 2011 befasse ich mich damit, wie ich Benutzerinnen und Benutzern, Kundinnen und Kunden mit meiner Arbeit als Softwareentwicklerin das Leben vereinfache. Durch mein analytisches Denken und meine Neugierde kann ich mich jeweils rasch in neue Projekte und Technologien einarbeiten. Mein offener Kommunikationsstil erlaubt mir, mich schnell und erfolgreich in neue Teams einzubringen. Die Tätigkeiten bei drei Softwareunternehmen ermöglichten mir, vielfältige Erfahrungen zu sammeln. Durch das Informatik-Studium an der Hochschule Luzern konnte ich bereits bestehendes Wissen vertiefen und in den Bereichen Software Engineering und Architektur viel dazulernen.</p>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>

            </div>
        </>
    );
}


