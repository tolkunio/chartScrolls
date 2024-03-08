import {AxiosInstance} from 'axios';

export class ChartScrollsApi {
    constructor(private instance: AxiosInstance) {}

    public getNews(params: {firstDate: string, lastDate: string, ticker: string, page?: number }) {
        return this.instance.get<IResponse>("/response", {
            params
        }).then(res=>res.data);
    }
}

/**
 * types
 */

export interface INews {
    id: string,
    title: string,
    author: string,
    publisher: IPublisher,
    tickers: Array<string>,
    description: string,
    published_utc: string,
    article_url: string
}

export interface IPublisher {
    name: string,
    homepage_url: string,
    logo_url: string,
    favicon_url: string
}
export interface IResponse{
    contentResponseDto:{
        content:string
    }
    latestNews:INews[]
}
