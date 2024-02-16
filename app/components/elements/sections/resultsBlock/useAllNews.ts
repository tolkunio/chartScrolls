import {NewsService} from "@/app/services/news/news.service";
import {INews} from "@/app/types/INews";
import {useQuery} from "react-query";

export const useAllNews = () => {
    const startDate=new Date('2023-01-10T14:48:02.123').toISOString();
    const lastDate=new Date().toISOString();
    const queryData = useQuery('news',
        () => NewsService.getAll('AAPL',
            startDate,
            lastDate), {
            select: ({data}) =>
                data.map((news): INews => ({
                    id: news.id,
                    title: news.title,
                    author: news.author,
                    logo_url: news.logo_url,
                    tickers: news.tickers,
                    description: news.description,
                    published_utc: news.published_utc,
                    article_url: news.article_url
                })).splice(0,5)
        });
    return queryData;
}