import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
// import { News } from "@/app/_libs/microcms";
//  type News ={
//     id: string;
//     title:string;
//     category:{
//         name:string;
//     };
//     publishedAt :string;
//     createdAt:string;

//  };
// const data: {
//   contents: News[];
// } = {
//   contents: [
//     {
//       id: "1",
//       title: "オフイスを移動しました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "2",
//       title: "当社CEOが業界リーダーTOP30に出されました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "3",
//       title: "テストの記事です",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//   ],
// };

export default async function Home() {
  // const sliceData =data.contents.slice(0,2);
  // const name ="世界";
  // const sliceData : News = [];
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーのカで世界を変える</h1>
          <p className={styles.description}>
            私たちはしばをリードしてるグローバルテックかんバニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news ={data.contents} />
        {/* <ul>
                {sliceData.map((article) => (
                    <li key={article.id} className={styles.list}>
                        <div className={styles.link}>
                            <Image className={styles.image} src="/no-image.png" alt ="NO Image" width={1200} height={630}/>
                            <dl className={styles.contents}>
                                <dt className={styles.newsItemTitle}> {article.title}</dt>
                                <dd className={styles.meta}>
                                    <span className={styles.tag}>{article.category.name}</span>
                                    <span className={styles.date}>
                                    <Image  src="/clock.svg" alt ="" width={16} height={16} priority/>
                                    {article.publishedAt}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </li>
                )
                )}
            </ul> */}

        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
