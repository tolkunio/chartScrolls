import HeadMeta from "@/components/ui/headMeta/HeadMeta";
import {getLayout} from "@/layout/Layout";

function NewsItem() {

    return (
        <>
            <HeadMeta title={'NewsById'}/>

        </>
    );
}

NewsItem.getLayout = getLayout;
export default NewsItem