import styles from "@/styles/Home.module.scss";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Footer from "@/components/footer/Footer";

;

function Home() {
    return (
        <>
            <HeadMeta title={'ChartScrolls'}/>
            <div className={styles.content}>
            </div>
            <Footer/>
        </>
    );
}
Home.getLayout=getLayout;
export default Home
