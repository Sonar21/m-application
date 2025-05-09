import styles from "./index.module.css";
import Link from 'next/link';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/member">メンバー</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">お問合せ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>&copy; SIMPLE.All Rights Reserved 2024</p>
        </footer>
    );
}