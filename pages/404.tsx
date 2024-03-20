
import styles from '../styles/Home.module.scss'
import {getLayout} from "@/layout/Layout";
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
