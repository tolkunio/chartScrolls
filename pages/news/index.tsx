import {useAllNews} from "@/assets/hooks/useAllNews";
import NewsCard from "@/components/newsCard/NewsCard";
import Link from "next/link";
import s from './News.module.scss';
import {getLayout} from "@/components/Layout/Layout";
import {useRouter} from "next/router";

const News = () => {
    const router = useRouter();
    const {startDate, endDate, ticker} = router.query;
    const news = useAllNews(startDate, endDate, ticker);

    return (
        <div className={s.newsBlock}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Headlines:</h2>
                <div className={s.flexWrapper}>
                    {
                        news && news.map(newsItem => <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
                            <NewsCard news={newsItem}/>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};
News.getLayout = getLayout;
export default News;
