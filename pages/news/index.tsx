import NewsCard from "@/components/newsCard/NewsCard";
import Link from "next/link";
import s from './News.module.scss';
import {getLayout} from "@/components/Layout/Layout";
import {INews} from "@/assets/api/chart-scrolls-api";
import Skeleton from "react-loading-skeleton";

type PropsType = {
    isLoading: boolean
    news: INews[]
}
const News = (props: PropsType) => {
    const {news, isLoading} = props;
    console.log(isLoading);
    return (
        <div className={s.newsBlock}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Headlines:</h2>
                <div className={s.flexWrapper}>
                    {
                        isLoading ?
                            <div className={s.skeleton}>
                                <Skeleton count={40}/>
                            </div>
                            :
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
