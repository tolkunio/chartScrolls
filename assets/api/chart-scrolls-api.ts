import {AxiosInstance} from 'axios';
import {Nullable} from "@/assets/types";

export class ChartScrollsApi {
    constructor(private instance: AxiosInstance) {}

    public getNews(params: {firstDate: string, lastDate: string, ticker: string, page?: number }) {
        return this.instance.get<ResponseType<INews>>("/news", {
            params
        }).then((res) => res.data);
    }
}

/**
 * types
 */
export type ResponseType<T> = {
    info: InfoType;
    results: T[];
};

type InfoType = {
    count: number;
    pages: number;
    next: Nullable<string>;
    prev: Nullable<string>;
};
type ParamsType = {
    page: number;
};

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