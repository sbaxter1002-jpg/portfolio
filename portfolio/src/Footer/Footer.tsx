import styles from "./Footer.module.css";

type FooterProps = {
    /** Name of the current page, */
    page?: string;
};

function Footer({ page = "" }: FooterProps) {
    const path = page ? `~/${page.toLowerCase()}` : "~";

    return (
        <footer className={styles.footer} aria-hidden="true">
            <span className={styles.user}>stuart@portfolio</span>
            <span className={styles.colon}>:</span>
            <span className={styles.path}>{path}</span>
            <span className={styles.dollar}>$</span>
        </footer>
    );
}

export default Footer;