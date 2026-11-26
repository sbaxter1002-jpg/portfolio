import { Fragment, useEffect } from "react";
import styles from "./Home.module.css";

// Block lettering for name. Shown on one line when there is room,
// and stacked on two lines when the window is narrow.
const WIDE = [
    "███████╗████████╗██╗   ██╗ █████╗ ██████╗ ████████╗    ██████╗  █████╗ ██╗  ██╗████████╗███████╗██████╗",
    "██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗╚██╗██╔╝╚══██╔══╝██╔════╝██╔══██╗",
    "███████╗   ██║   ██║   ██║███████║██████╔╝   ██║       ██████╔╝███████║ ╚███╔╝    ██║   █████╗  ██████╔╝",
    "╚════██║   ██║   ██║   ██║██╔══██║██╔══██╗   ██║       ██╔══██╗██╔══██║ ██╔██╗    ██║   ██╔══╝  ██╔══██╗",
    "███████║   ██║   ╚██████╔╝██║  ██║██║  ██║   ██║       ██████╔╝██║  ██║██╔╝ ██╗   ██║   ███████╗██║  ██║",
    "╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝"
];

const STACKED = [
    "███████╗████████╗██╗   ██╗ █████╗ ██████╗ ████████╗",
    "██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔══██╗╚══██╔══╝",
    "███████╗   ██║   ██║   ██║███████║██████╔╝   ██║",
    "╚════██║   ██║   ██║   ██║██╔══██║██╔══██╗   ██║",
    "███████║   ██║   ╚██████╔╝██║  ██║██║  ██║   ██║",
    "╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝",
    "",
    "██████╗  █████╗ ██╗  ██╗████████╗███████╗██████╗",
    "██╔══██╗██╔══██╗╚██╗██╔╝╚══██╔══╝██╔════╝██╔══██╗",
    "██████╔╝███████║ ╚███╔╝    ██║   █████╗  ██████╔╝",
    "██╔══██╗██╔══██║ ██╔██╗    ██║   ██╔══╝  ██╔══██╗",
    "██████╔╝██║  ██║██╔╝ ██╗   ██║   ███████╗██║  ██║",
    "╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝"
];

// draws boxes bright and edges dimmer
function Art({ lines, className }) {
    return (
        <pre className={className} aria-hidden="true">
            {lines.map((text, i) => (
                <Fragment key={i}>
                    {text.split(/(█+)/).map((part, j) =>
                        part.startsWith("█") ? (
                            <span key={j}>{part}</span>
                        ) : (
                            <span key={j} className={styles.shadow}>
                                {part}
                            </span>
                        )
                    )}
                    {"\n"}
                </Fragment>
            ))}
        </pre>
    );
}

function Home() {
    useEffect(() => {
        document.title = "Stuart Baxter | Software Engineer";
    }, []);

    return (
        <div className={styles.container}>
            {}
            <h1 className={styles.visuallyHidden}>Stuart Baxter</h1>
            <Art lines={WIDE} className={`${styles.art} ${styles.wide}`} />
            <Art lines={STACKED} className={`${styles.art} ${styles.stacked}`} />

            <hr className={styles.rule} />

            <p className={styles.subtitle}>
                Aspiring Software Engineer
            </p>
        </div>
    );
}

export default Home;