import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import Category from '@/app/_components/Category';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    id: string;
    current:string;
  };
};

export default async function Page({ params }: Props) {
    const current =parseInt(params.current,10);

    if(Number.isNaN(current)|| current<1){
        notFound();
    }
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset:NEWS_LIST_LIMIT * (current-1),
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}