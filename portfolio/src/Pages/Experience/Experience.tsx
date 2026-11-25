import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Experience.module.css";
import { EXPERIENCE } from "../../data/portfolio";

function Experience() {
    const { hash } = useLocation();

    useEffect(() => {
        document.title = "Experience | Stuart Baxter";
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.intro}>
                <h1 className={styles.heading}>
                    Experience<span className={styles.cursor} aria-hidden="true" />
                </h1>
                <p className={styles.copy}>
                    example
                </p>
            </div>

            <div>
                <p className={styles.prompt}>
                    <span aria-hidden="true">$ </span>git log --career
                </p>

                <ol className={styles.timeline}>
                    {EXPERIENCE.map(({ id, role, company, period, points }) => (
                        <li className={styles.item} key={id}>
                            {/* Dot and line along the top, purely decorative */}
                            <div className={styles.marker} aria-hidden="true">
                                <span className={styles.dot} />
                                <span className={styles.line} />
                            </div>

                            <article
                                className={`${styles.card} ${hash === `#${id}` ? styles.highlight : ""}`}
                            >
                                <p className={styles.period}>{period}</p>
                                <h2 className={styles.role}>{role}</h2>
                                <p className={styles.company}>{company}</p>
                                <ul className={styles.points}>
                                    {points.map((point, j) => (
                                        <li key={j}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
            </div>
        </div>
    );
}

export default Experience;