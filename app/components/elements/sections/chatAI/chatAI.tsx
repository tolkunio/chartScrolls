import s from './chatAI.module.scss';

const ChatAI = () => {
    return (
        <div className={s.chatAI}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.answerBlock}>
                        <span className={s.you}>You</span>
                        <div className={s.answer}>

                        </div>
                    </div>
                    <div className={s.askBlock}>
                        <span className={s.inputTitle}>Ask your question:</span>
                        <input className={s.inp} type={'text'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
