import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import folderIcon from '../assets/folderPic.png';
import textIcon from '../assets/textPic.png';
import githubLogo from '../assets/githubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.png';
import { PROJECTS, EXPERIENCE } from '../data/portfolio';

const AVAILABLE = true;

const GITHUB_URL = 'https://github.com/sbaxter1002-jpg';
const LINKEDIN_URL = 'https://www.linkedin.com/in/stuart-baxter-7a0191369/';

const NAV_ITEMS = [
    { to: '/Home', label: 'Stuart_Baxter', icon: textIcon, bold: true },
    { to: '/About', label: 'About', icon: textIcon },
    // `files` makes the folder drop down into one file per entry
    { to: '/Projects', label: 'Projects', icon: folderIcon, files: PROJECTS.map((p) => p.id) },
    { to: '/Experience', label: 'Experience', icon: folderIcon, files: EXPERIENCE.map((e) => e.id) },
    { to: '/Contact', label: 'Contact', icon: textIcon },
];

function Sidebar() {
    const { pathname, hash } = useLocation();

    const linkClass = ({ isActive }: { isActive: boolean}) =>
        `${styles.link} ${isActive ? styles.active : ''}`;

    return (
        <nav className={styles.sidebar} aria-label="Main">
            <Link to="/Home" className={styles.brand}>
                ~/portfolio
            </Link>

            <ul className={styles.navLinks}>
                {NAV_ITEMS.map(({ to, label, icon, bold, files }) => {
                    const open = Boolean(files) && pathname.toLowerCase() === to.toLowerCase();

                    return (
                        <li className={styles.navLink} key={to}>
                            <NavLink to={to} className={linkClass}>
                                <span className={styles.gtSign} aria-hidden="true">
                                    &gt;
                                </span>
                                {}
                                <img src={icon} alt="" width={16} />
                                <span className={`${styles.label} ${bold ? styles.bold : ''}`}>
                                    {label}
                                </span>
                            </NavLink>

                            {files && (
                                <div className={`${styles.sub} ${open ? styles.subOpen : ''}`}>
                                    <ul className={styles.files}>
                                        {files.map((id) => {
                                            const current = open && hash === `#${id}`;
                                            return (
                                                <li key={id}>
                                                    <Link
                                                        to={`${to}#${id}`}
                                                        className={`${styles.file} ${current ? styles.fileActive : ''}`}
                                                        aria-current={current ? 'location' : undefined}
                                                    >
                                                        <img src={textIcon} alt="" width={14} />
                                                        <span className={styles.fileName}>{id}.md</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>

            <div className={styles.bottom}>
                {AVAILABLE && (
                    <p className={styles.status}>
                        <span className={styles.dot} aria-hidden="true" />
                        Available for work
                    </p>
                )}
                <div className={styles.socials}>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        <img src={githubLogo} alt="GitHub" width={24} height={24} />
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.social}
                    >
                        <img src={linkedInLogo} alt="LinkedIn" width={24} height={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;