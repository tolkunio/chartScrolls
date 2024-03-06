import NewsCard from "@/components/newsCard/NewsCard";
import Link from "next/link";
import s from './News.module.scss';
import {getLayout} from "@/components/Layout/Layout";
import {ResponseType, INews} from "@/assets/api/chart-scrolls-api";
import {API} from "@/assets/api/api";
type PropsType = {
    news: ResponseType<INews>
}
export const getServerSideProps = async ({ params }) => {
    console.log(params);
    const { startDate, endDate, ticker } = params;

    const news = await API.chartScrollsApi.getNews({startDate,endDate,ticker});
    if (!news) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            news,
            startDate,
            endDate,
            ticker
        }
    }

}
const News = (props: PropsType &{ startDate: string, endDate: string, ticker: string }) => {
    const {startDate, endDate, ticker,news} = props;
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
