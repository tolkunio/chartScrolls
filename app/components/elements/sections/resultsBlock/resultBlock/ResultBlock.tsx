import s from './ResultBlock.module.scss';
import Image from "next/image";
import arrow from '../../../../../../assets/icons/arrow.svg';

type ResultBlockPropsType = {
    logo_url: string,
    title: string,
    author: string,
    published_utc: string,
    description: string,
    article_url: string

}
const ResultBlock = ({logo_url, title, author, published_utc, description, article_url}: ResultBlockPropsType) => {
    let shortDesc = description.substring(0, 300);
    return (
        <section className={s.section}>
            <div className={s.mainBlock}>
                <Image src={logo_url} width={'110'} height={'34'} alt={'logo'}/>
                <span className={s.title}>{title}</span>
                <div className={s.authorBlock}>
                    <span className={s.span}>Author:</span>
                    <span className={s.spanValue}>{author}</span>
                </div>
                <div className={s.dateBlock}>
                    <span className={s.span}>Published UTC:</span>
                    <span className={s.spanValue}>{published_utc}</span>
                </div>
                <div className={s.desc}>
                    {
                        description.length > 300 ? `${shortDesc}...` : description
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

export default ResultBlock;
