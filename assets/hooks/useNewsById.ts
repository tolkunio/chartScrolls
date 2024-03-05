import {useState} from "react";
import {Nullable} from "@/assets/types";
import {INews} from "@/assets/types";
import {useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {router} from "next/client";

export const useNewsById = (startDate: string, endDate: string, tickerName: string):Nullable<INews> => {
    const [newsItem, setNewsItem] = useState<Nullable<INews>>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_CHSC_BACKEND_API_URL}/news/${router.query.id}`, {
            params: {
                ticker: tickerName,
                firstDate: startDate,
                lastDate: endDate
            }
        }).then(res => setNewsItem(res.data.data))
    }, []);
    return newsItem;
}