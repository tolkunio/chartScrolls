import s from './chatAI.module.scss';

const ChatAI = () => {
    return (
        <div className={s.chatAI}>
            <h2 className={s.sectionTitle}>Why:</h2>
                    <div className={s.answerBlock}>
                        <div className={s.answer}>
                            {`The year began with Amazon's stock price around $1,898 per share. Throughout 2020, like many tech companies, Amazon benefited from changes in consumer behavior and business operations due to the COVID-19 pandemic, with increased demand for e-commerce, cloud computing services, and online entertainment. This demand surge led to a substantial increase in Amazon's stock price.`}
                        </div>
                    </div>
        </div>
    );
};

export default ChatAI;
