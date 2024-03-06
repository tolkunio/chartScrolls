import NewsCard from "@/components/newsCard/NewsCard";
import Link from "next/link";
import s from './News.module.scss';
import {getLayout} from "@/components/Layout/Layout";
import {ResponseType, INews} from "@/assets/api/chart-scrolls-api";
import {API} from "@/assets/api/api";
type PropsType = {
    news: ResponseType<INews>
}
export const getServerSideProps = async () => {
    const startDate=new Date('2023-01-10T14:48:02.123').toISOString();
    const endDate=new Date().toISOString();
    let ticker='AAPL'

    const news = await API.chartScrollsApi.getNews({startDate,endDate,ticker});
    if (!news) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            news,
        }
    }

}
const News = (props:PropsType) => {
    const {news} = props;
    return (
        <div className={s.newsBlock}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Headlines:</h2>
                <div className={s.flexWrapper}>
                    {
                        news && news.results.map(newsItem => <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
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
