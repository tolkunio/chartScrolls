import styles from "@/styles/Home.module.scss";
import HeadMeta from "@/components/ui/headMeta/HeadMeta";
import {getLayout} from "@/layout/Layout";
import Footer from "@/layout/footer/Footer";
import {useState} from "react";
import TickerBlock from "@/layout/tickerBlock/TickerBlock";
import News from "@/pages/news";
import ChatAI from "@/layout/chatAI/chatAI";
import {IResponse} from "@/assets/api/chart-scrolls-api";
function Home() {
    const [page, setPage] = useState(1)
    const onChange = (page: number) => {
        setPage(page)
    }
    const [selectedCount, setSelectedCount] = useState<number>(10)
    const [data, setData] = useState<IResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const handleResponseUpdate = (data: IResponse) => {
        setData(data);
    };
    return (
        <>
            <HeadMeta title={'ChartScrolls'}/>
            <div className={styles.content}>
                <TickerBlock onClickResponseUpdate={handleResponseUpdate} setIsLoading={setIsLoading}/>
                <div className={styles.body}>
                    <News isLoading={isLoading} news={data?.latestNews || []}/>
                    <ChatAI isLoading={isLoading} content={data?.contentResponseDto.content || ''}/>

                </div>
            </div>
            {/*<div className={styles.pagination}>*/}
            {/*    <Pagination onChange={onChange}*/}
            {/*                page={page} selectedCount={selectedCount}*/}
            {/*                setSelectedCount={setSelectedCount} totalCount={100}/>*/}
            {/*</div>*/}

            <Footer/>
        </>
    );
}

Home.getLayout = getLayout;
export default Home
