export type Nullable<T>=null|T;
export interface INews {
    id:string,
    title:string,
    author:string,
    publisher:IPublisher,
    tickers:Array<string>,
    description:string,
    published_utc:string,
    article_url:string
}
export interface IPublisher{
    name:string,
    homepage_url:string,
    logo_url:string,
    favicon_url:string
}