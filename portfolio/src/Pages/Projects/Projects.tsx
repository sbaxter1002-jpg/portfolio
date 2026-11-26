import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import { PROJECTS } from "../../data/portfolio";

function Projects() {
    // A link like /Projects#project-one highlights that card
    const { hash } = useLocation();

    useEffect(() => {
        document.title = "Projects | Stuart Baxter";
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.intro}>
                <h1 className={styles.heading}>
                    Projects<span className={styles.cursor} aria-hidden="true" />
                </h1>
                <p className={styles.copy}>
                    A mix of University and personal projects, covering C++, Java, and web development using React.
                </p>
            </div>

            <div>
                <p className={styles.prompt}>
                    <span aria-hidden="true">$ </span>ls projects/
                </p>

                <ul className={styles.cards}>
                    {PROJECTS.map(({ id, name, description, tech, github, demo }) => (
                        <li
                            className={`${styles.card} ${hash === `#${id}` ? styles.highlight : ""}`}
                            key={id}
                        >
                            <h2 className={styles.name}>{name}</h2>
                            <p className={styles.description}>{description}</p>

                            <ul className={styles.chips}>
                                {tech.map((t) => (
                                    <li className={styles.chip} key={t}>
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.links}>
                                {github && (
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        GitHub
                                    </a>
                                )}
                                {demo && (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Live demo
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Projects;