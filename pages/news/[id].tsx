import HeadMeta from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";

function NewsItem() {

    return (
        <>
            <HeadMeta title={'NewsById'}/>

        </>
    );
}

NewsItem.getLayout = getLayout;
export default NewsItem