import s from './chatAI.module.scss';
import Skeleton from "react-loading-skeleton";

type PropsType = {
    content: string,
    isLoading: boolean
}
const ChatAI = ({content, isLoading}: PropsType) => {
    if(!content) return null;
    return (
        <div className={s.chatAI}>
            <h2 className={s.sectionTitle}>Why:</h2>
            <div className={s.answerBlock}>
                <div className={s.answer}>
                    {
                        isLoading?
                            <div className={s.skeleton}>
                                <Skeleton count={40}/>
                            </div>
                            : content
                    }
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
