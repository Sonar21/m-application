import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link"
import styles from "./index.module.css"
type Props ={
    totalCount :number;
    current? :number;
    basepath? :string;
};

export default function Pagination({totalCount,current =1,basepath= "/news"}:Props){
    const pages =Array.from(
        {length: Math.ceil(totalCount/NEWS_LIST_LIMIT)},
        (_, i)=> i+1
    );
    return (
        <nav>
        <ul className={styles.container}>
            {pages.map((p)=>(
                <li className={styles.list} key={p}>
                    {/* <Link href={`/news/p/${p}`} className={styles.item}>{p}</Link> */}
                    {current !== p ? ( <Link href={`${basepath}/p/${p}`} className={styles.item}>{p}</Link>)
                    : (
                        <span className={`${styles.item} ${styles.current}`}>{p}</span>
                    )
                }
                </li>
            ))}
        </ul>
    </nav>
    );
} 