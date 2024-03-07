import styles from "@/styles/Home.module.scss";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Footer from "@/components/footer/Footer";
import {useState} from "react";
import {INews} from "@/assets/api/chart-scrolls-api";
import TickerBlock from "@/components/sections/tickerBlock/TickerBlock";
import News from "@/pages/news";
import ChatAI from "@/components/sections/chatAI/chatAI";

;

function Home() {
    const [news, setNews] = useState<INews[]>([]);
    const [isLoading,setIsLoading]=useState(false);

    const handleNewsUpdate = (data: INews[]) => {
        setNews(data);
    };
    return (
        <>
            <HeadMeta title={'ChartScrolls'}/>
            <div className={styles.content}>
                <TickerBlock onClickHandler={handleNewsUpdate} setIsLoading={setIsLoading}/>
                <div className={styles.body}>
                    <News isLoading={isLoading} news={news}/>
                    <ChatAI/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

Home.getLayout = getLayout;
export default Home
