import {axiosClassic} from "@/app/api/interceptors";
import {INews} from "@/app/types/INews";
import {getNewsUrl} from "@/app/configs/api.config";

export const NewsService = {
    async getAll(ticker:string,firstDate:string,lastDate:string,) {
        const res= axiosClassic.get<INews[]>(getNewsUrl(''), {
            params:{
                ticker:ticker,
                firstDate:firstDate,
                lastDate:lastDate
            }
        });
        return res;
    },
}