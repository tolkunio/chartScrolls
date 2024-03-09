import styles from "@/styles/Home.module.scss";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Footer from "@/components/footer/Footer";
import {useState} from "react";
import TickerBlock from "@/components/sections/tickerBlock/TickerBlock";
import News from "@/pages/news";
import ChatAI from "@/components/sections/chatAI/chatAI";
import {IResponse} from "@/assets/api/chart-scrolls-api";
function Home() {
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
            <Footer/>
        </>
    );
}

Home.getLayout = getLayout;
export default Home
