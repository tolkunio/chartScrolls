import s from './chatAI.module.scss';
import Image from "next/image";

const ChatAI = () => {
    return (
        <div className={s.chatAI}>
            <div className={s.container}>
                <div className={s.flexWrapper}>
                    <div className={s.questionBlock}>
                        <span>You</span>
                        <div className={s.question}>
                            what was with Amazon price in 2020?
                        </div>
                    </div>
                    <div className={s.answerBlock}>
                        <span>ChartScroll’s AI:</span>
                        <div className={s.answer}>
                            {`The year began with Amazon's stock price around $1,898 per share. Throughout 2020, like many tech companies, Amazon benefited from changes in consumer behavior and business operations due to the COVID-19 pandemic, with increased demand for e-commerce, cloud computing services, and online entertainment. This demand surge led to a substantial increase in Amazon's stock price.`}
                        </div>
                    </div>
                    <div className={s.askBlock}>
                        <span>Ask your question:</span>
                        <div className={s.buttonWrapper}>
                            <input type={'text'}/>
                            <button onClick={()=>{}}>
                                <Image
                                    src='/icons/arrow-up.svg'
                                    width={24}
                                    height={24}
                                    alt={'chartScrolls'}
                                    draggable={false}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatAI;
