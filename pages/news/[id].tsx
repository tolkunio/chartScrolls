import HeadMeta from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {useNewsById} from "@/assets/hooks/useNewsById";
import NewsCard from "@/components/newsCard/NewsCard";

function NewsItem() {
    const newsItem=useNewsById('','','');
    return (
        <>
            <HeadMeta title={'Character'}/>
            {newsItem && <NewsCard character={newsItem}/>
            }
        </>
    );
}

NewsItem.getLayout = getLayout;
export default NewsItem