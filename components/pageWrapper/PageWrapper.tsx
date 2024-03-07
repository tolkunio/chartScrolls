import s from './PageWrapper.module.scss';
import {PropsWithChildren} from "react";
import HeadMeta from "@/components/HeadMeta/HeadMeta";
type PropsType = {
    title: string;
};
const PageWrapper = ({title,children}:PropsWithChildren<PropsType>) => {
    return (
        <>
            <HeadMeta title={title} />
            <div className={s.mainBlock}>
                {children}
            </div>
        </>
    );
};

export default PageWrapper;
