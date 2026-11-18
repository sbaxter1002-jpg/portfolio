import styles from "./Contact.module.css"
import githubLogo from "../../assets/githubLogo.png"
import linkedInLogo from "../../assets/linkedInLogo.png"
import mailLogo from "../../assets/mailLogo.png"

function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.introduction}>
                <h1 className={styles.heading}>Get in Touch</h1>
                <p>I'm always open to hear about new software engineering opportunities, ideas, or just to have a chat.</p>
                <p>Contact me through any of these options:</p>

                <a href="#" target="_blank"><img src={mailLogo} alt="Mail" width="48" height="48"/></a><a href="#" target="_blank" className={styles.links}>Email</a> 
                <br />
                <a href="https://github.com/sbaxter1002-jpg" target="_blank"><img src={githubLogo} alt="Github" width="48" height="48" /></a><a href="https://github.com/sbaxter1002-jpg" target="_blank" className={styles.links}>Github</a>
                <br />
                <a href="https://www.linkedin.com/in/stuart-baxter-7a0191369/" target="_blank"><img src={linkedInLogo} alt="LinkedIn" width="48" height="48"/></a><a href="https://www.linkedin.com/in/stuart-baxter-7a0191369/" target="_blank" className={styles.links}>LinkedIn</a>
            </div>
        </div>
    );
}

export default Contact