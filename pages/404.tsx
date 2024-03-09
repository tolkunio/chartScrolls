import {getLayout} from "@/components/Layout/Layout";
import styles from '../styles/Home.module.scss'
type PropsType={
    msg:string
}
const NotFound = ({msg}:PropsType) => {
    return (
        <div className={styles.notFound}>
            <h2> {msg} NOT FOUND</h2>
        </div>
    );
};
NotFound.getLayout = getLayout;
export default NotFound;
