import { useEffect } from "react";
import styles from "./About.module.css";

const BIO = [
    "Hi, I'm Stuart. I am a second year computer science student from Glasgow currently studying at the Univerity of Dundee.",
    "I am passionate about becoming a software engineer. I enjoy to solve problems and build new things.",
];

const PROFILE = [
    { label: "name", value: "Stuart Baxter" },
    { label: "location", value: "Dundee, Scotland" },
    { label: "education", value: "BSc (Hons) Computer Science (Exp. 2029) @ University of Dundee" },
    { label: "focus", value: "Backend, Software Engineering" },
    { label: "currently", value: "Studying my second year of CS at the University of Dundee" },
];

const SKILLS = [
    { group: "languages", items: ["C", "C++", "Java", "Python"] },
    { group: "frontend", items: ["React", "HTML", "CSS", "Bootstrap"] },
    { group: "backend", items: ["Node.js", "SQL"] },
    { group: "tools", items: ["Git", "Unix", "VS Code"] },
];

const TRANSFERABLE = [
    {
        skill: "Teamwork",
        example: "[Where you worked with others, what your part was, and the result.]",
    },
    {
        skill: "Communication",
        example: "[A time you explained something, presented, or wrote documentation.]",
    },
    {
        skill: "Problem solving",
        example: "[A problem you were stuck on, how you approached it, and what fixed it.]",
    },
    {
        skill: "Time management",
        example: "[A deadline or competing tasks, and how you planned your time.]",
    },
];

const LEARNING = ["Games Development", "[Another one]"];

const INTERESTS = ["Playing Guitar", "Chess", "Traveling"];

function Chips({ items }) {
    return (
        <ul className={styles.chips}>
            {items.map((item) => (
                <li className={styles.chip} key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function About() {
    useEffect(() => {
        document.title = "About | Stuart Baxter";
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <h1 className={styles.heading}>
                        About Me<span className={styles.cursor} aria-hidden="true" />
                    </h1>
                    {BIO.map((paragraph, i) => (
                        <p className={styles.copy} key={i}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                <dl className={styles.profile}>
                    {PROFILE.map(({ label, value }) => (
                        <div className={styles.profileRow} key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div>
                <p className={styles.prompt}>
                    <span aria-hidden="true">$ </span>ls skills/
                </p>

                <div className={styles.cards}>
                    <section className={`${styles.card} ${styles.skills}`}>
                        <h2 className={styles.cardTitle}>skills/</h2>
                        <dl className={styles.skillList}>
                            {SKILLS.map(({ group, items }) => (
                                <div className={styles.skillRow} key={group}>
                                    <dt>{group}</dt>
                                    <dd>
                                        <Chips items={items} />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </section>

                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>learning/</h2>
                        <Chips items={LEARNING} />
                    </section>

                    <section className={styles.card}>
                        <h2 className={styles.cardTitle}>interests/</h2>
                        <Chips items={INTERESTS} />
                    </section>
                </div>
            </div>

            <div>
                <p className={styles.prompt}>
                    <span aria-hidden="true">$ </span>cat transferable-skills.txt
                </p>

                <ul className={styles.softGrid}>
                    {TRANSFERABLE.map(({ skill, example }) => (
                        <li className={styles.card} key={skill}>
                            <h2 className={styles.cardTitle}>{skill}</h2>
                            <p className={styles.example}>{example}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default About;