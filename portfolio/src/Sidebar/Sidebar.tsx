import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'
import folderIcon from '../assets/folderPic.png'
import textIcon from '../assets/textPic.png'

function Sidebar() {
    const linkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

    return(
        <nav className={styles.sidebar}>
            <p>~/..</p>

            <div className={styles.navMenu}>
                <ul className={styles.navLinks}>

                    <li className={styles.navLink}>
                        <NavLink to="/Home" className={linkClass}>
                            <b>
                                <span className={styles.gtSign}>&gt;</span>
                                <img src={textIcon} alt="Text" width={16} /> Stuart_Baxter
                            </b>                        
                        </NavLink>
                    </li>

                    <li className={styles.navLink}>
                        <NavLink to="/About" className={linkClass}>
                            <span className={styles.gtSign}>&gt;</span>
                            <img src={folderIcon} alt="Folder" width={16} /> About
                        </NavLink>
                    </li>

                    <li className={styles.navLink}>
                        <NavLink to="/Projects" className={linkClass}>
                            <span className={styles.gtSign}>&gt;</span>
                            <img src={folderIcon} alt="Folder" width={16} /> Projects
                        </NavLink>
                    </li>

                    <li className={styles.navLink}>
                        <NavLink to="/Experience" className={linkClass}>
                            <span className={styles.gtSign}>&gt;</span>
                            <img src={folderIcon} alt="Folder" width={16} /> Experience
                        </NavLink>
                    </li>

                    <li className={styles.navLink}>
                        <NavLink to="/Contact" className={linkClass}>
                            <span className={styles.gtSign}>&gt;</span>
                            <img src={folderIcon} alt="Folder" width={16} /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar