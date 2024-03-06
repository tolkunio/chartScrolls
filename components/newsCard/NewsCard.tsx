import s from './NewsCard.module.scss';
import Image from "next/image";
import {INews} from "@/assets/api/chart-scrolls-api";

type PropsType = {
    news: INews
}
const NewsCard = ({news}: PropsType) => {
    return (
        <section className={s.section}>
            <div className={s.mainBlock}>
                <Image src={news.publisher.logo_url}
                       className={s.img} width={73} height={20} alt={'logo'}/>
                <span className={s.title}>{news.title}</span>
                <div className={s.authorBlock}>
                    <span className={s.span}>Author:</span>
                    <span className={s.spanValue}>{news.author}</span>
                </div>
                <div className={s.dateBlock}>
                    <span className={s.span}>Published UTC:</span>
                    <span className={s.spanValue}>{news.published_utc}</span>
                </div>
                <div className={s.desc}>
                    {
                       news.description && news.description.length > 300 ? `${news.description.substring(0,300)}...` : news.description
                    }
                </div>
            </div>
            <div className={s.readMore}>
                <span>Read more</span>
                <Image src='/icons/arrow.svg' width={30} height={15} alt={'arrow'}/>
            </div>

        </section>
    );
};

export default NewsCard;
