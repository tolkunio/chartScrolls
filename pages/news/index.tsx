import NewsCard from "@/components/layout/newsCard/NewsCard";
import Link from "next/link";
import s from './News.module.scss';
import {getLayout} from "@/layout/Layout";
import {INews} from "@/assets/api/chart-scrolls-api";
import Skeleton from "react-loading-skeleton";
import NotFound from "@/pages/404";

type PropsType = {
    isLoading: boolean
    news: INews[]
}
const News = ({news, isLoading}: PropsType) => {
    if (!news || news.length === 0) return <NotFound msg={'NEWS'}/>
    return (
        <>
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
                                news.map(newsItem => <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
                                    <NewsCard news={newsItem}/>
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        </>

    );
};
News.getLayout = getLayout;
export default News;
