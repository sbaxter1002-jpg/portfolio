import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import githubLogo from "../../assets/githubLogo.png";
import linkedInLogo from "../../assets/linkedInLogo.png";
import mailLogo from "../../assets/mailLogo.png";
import cvLogo from "../../assets/textPic.png";
import cvFile from "../../assets/Stuart_Baxter.pdf";

const EMAIL = "sbaxter1002@gmail.com";
const CV_URL = cvFile;
const LOCATION = "United Kingdom";
const TIME_ZONE = "Europe/London";
const LOOKING_FOR = "Software engineering roles";
const REPLY_TIME = "Within 1-2 days";

const GITHUB_URL = "https://github.com/sbaxter1002-jpg";
const LINKEDIN_URL = "https://www.linkedin.com/in/stuart-baxter-7a0191369/";

const LINKS = [
    { name: "GitHub", handle: "sbaxter1002-jpg", href: GITHUB_URL, logo: githubLogo },
    { name: "LinkedIn", handle: "stuart-baxter", href: LINKEDIN_URL, logo: linkedInLogo },
];

function useLocalTime() {
    const format = () =>
        new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: TIME_ZONE,
            timeZoneName: "short",
        }).format(new Date());

    const [time, setTime] = useState(format);
    useEffect(() => {
        const id = setInterval(() => setTime(format()), 30000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function Contact() {
    const [copied, setCopied] = useState(false);
    const time = useLocalTime();

    useEffect(() => {
        document.title = "Contact | Stuart Baxter";
    }, []);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <h1 className={styles.heading}>
                        Get in Touch<span className={styles.cursor} aria-hidden="true" />
                    </h1>
                    <p className={styles.copy}>
                        I'm open to hearing about software engineering roles, ideas, or just
                        having a chat. Message me on any of these and I'll reply as soon as I
                        can.
                    </p>
                </div>

                <dl className={styles.status}>
                    <div className={styles.statusRow}>
                        <dt>status</dt>
                        <dd>
                            <span className={styles.dot} aria-hidden="true" />
                            Available for work
                        </dd>
                    </div>
                    <div className={styles.statusRow}>
                        <dt>looking for</dt>
                        <dd>{LOOKING_FOR}</dd>
                    </div>
                    <div className={styles.statusRow}>
                        <dt>local time</dt>
                        <dd>
                            {time}, {LOCATION}
                        </dd>
                    </div>
                    <div className={styles.statusRow}>
                        <dt>reply time</dt>
                        <dd>{REPLY_TIME}</dd>
                    </div>
                </dl>
            </div>

            <div>
                <p className={styles.prompt}>
                    <span aria-hidden="true">$ </span>contact --list
                </p>

                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <img src={mailLogo} alt="" className={styles.icon} />
                        <a
                            href={`mailto:${EMAIL}`}
                            className={styles.link}
                            aria-label={`Email ${EMAIL}`}
                        >
                            <span className={styles.label}>Email</span>
                        </a>
                        <span className={styles.handle}>{EMAIL}</span>
                        <button type="button" className={styles.copyButton} onClick={copyEmail}>
                            {copied ? "Copied" : "Copy address"}
                        </button>
                        <span className={styles.visuallyHidden} aria-live="polite">
                            {copied ? "Email address copied to clipboard" : ""}
                        </span>
                    </li>

                    {LINKS.map(({ name, handle, href, logo }) => (
                        <li className={styles.card} key={name}>
                            <img src={logo} alt="" className={styles.icon} />
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <span className={styles.label}>{name}</span>
                            </a>
                            <span className={styles.handle}>{handle}</span>
                        </li>
                    ))}

                    <li className={styles.card}>
                        <img src={cvLogo} alt="" className={styles.icon} />
                        <a className={styles.link} href={CV_URL} download>
                            <span className={styles.label}>CV</span>
                        </a>
                        <span className={styles.handle}>Download as PDF</span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Contact;