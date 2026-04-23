import styles from './Sidebar.module.css'
import folderIcon from '../assets/folderPic.png'

function Header() {
    return(
        <nav className={styles.sidebar}>
            <p>~/..</p>
            <a href="../Pages/Home/Home.tsx" className={styles.home}><b><span className={styles.gtSign}>&gt;</span> <img src={folderIcon} alt="Folder" width={16}/> Stuart Baxter</b></a>
            <div className={styles.navMenu}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}><a className={styles.about} href="../Pages/About.tsx"><span className={styles.gtSign}>&gt;</span> <img src={folderIcon} alt="Folder" width={16}/> About</a></li>
                    <li className={styles.navLink}><a className={styles.projects} href="../Pages/Projects.tsx"><span className={styles.gtSign}>&gt;</span> <img src={folderIcon} alt="Folder" width={16}/> Projects</a></li>
                    <li className={styles.navLink}><a className={styles.experience} href="../Pages/Experience.tsx"><span className={styles.gtSign}>&gt;</span> <img src={folderIcon} alt="Folder" width={16}/> Experience</a></li>
                    <li className={styles.navLink}><a className={styles.contact} href="../Pages/Contact.tsx"><span className={styles.gtSign}>&gt;</span> <img src={folderIcon} alt="Folder" width={16}/> Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header