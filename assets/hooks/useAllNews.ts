import {useState} from "react";
import {Nullable} from "@/assets/types";
import {INews} from "@/assets/types";
import {useEffect} from "react";
import axios from "axios";

export const useAllNews = (startDate: string, endDate: string, tickerName: string):Nullable<INews[]> => {
    const [news, setNews] = useState<Nullable<INews[]>>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_CHSC_BACKEND_API_URL}/news`, {
            params: {
                ticker: tickerName,
                firstDate: startDate,
                lastDate: endDate
            }
        }).then(res =>setNews(res.data))
    }, []);
    return news;
}