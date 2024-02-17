import s from './ResultsBlock.module.scss'
import ResultBlock from "@/app/components/elements/sections/resultsBlock/resultBlock/ResultBlock";
import {useAllNews} from "@/app/components/elements/sections/resultsBlock/useAllNews";

const ResultsBlock = () => {
    const {isLoading, status, data} = useAllNews();
    return (
        <div className={s.resultsBlock}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Related Articles:</h2>
                <div className={s.flexWrapper}>
                    {status === "error" && <p>Error fetching data:{status}</p>}
                    {status === 'success' && <>
                        {
                            data.map((result) =>
                                <ResultBlock key={result.id}
                                             logo_url={result.logo_url}
                                             title={result.title}
                                             author={result.author}
                                             published_utc={result.published_utc}
                                             description={result.description}
                                             article_url={result.article_url}
                                />)
                        }
                    </>}
                </div>
            </div>
        </div>
    );
};

export default ResultsBlock;
