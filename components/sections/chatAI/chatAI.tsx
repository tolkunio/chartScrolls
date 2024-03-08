import s from './chatAI.module.scss';
import Skeleton from "react-loading-skeleton";

type PropsType = {
    content: string,
}
const ChatAI = ({content}: PropsType) => {
    return (
        <div className={s.chatAI}>
            <h2 className={s.sectionTitle}>Why:</h2>
            <div className={s.answerBlock}>
                <div className={s.answer}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
