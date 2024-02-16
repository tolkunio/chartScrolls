import s from './ResultsBlock.module.scss'
import ResultBlock from "@/app/components/elements/sections/resultsBlock/resultBlock/ResultBlock";
import {useAllNews} from "@/app/components/elements/sections/resultsBlock/useAllNews";

// export const mockResults: Array<INew> = [
//     {
//         id: "aBS3Oyv5swXxMT1OBXOZARABwEszNCJNswHpEf69aAg",
//         title: 'Better Growth Stock in 2024: Amazon vs. Apple',
//         author: 'newsfeedback@fool.com (Dani Cook)',
//         logo_url: 'https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg',
//         tickers: [
//             "AMZN",
//             "AAPL"
//         ],
//         description: '"These companies lead some of the most lucrative industries and have bright outlooks in the news year.',
//         published_utc: '2024-01-02T10:05:00Z',
//         article_url: 'https://www.fool.com/investing/2024/01/02/better-growth-stock-in-2024-amazon-vs-apple/'
//     },
//     {
//         id: "aBS3Oyv5swXxMT1OBXOZARABwEszNCJNswHpEf69aAg",
//         title: 'Better Growth Stock in 2024: Amazon vs. Apple',
//         author: 'newsfeedback@fool.com (Dani Cook)',
//         logo_url: 'https://s3.polygon.io/public/assets/news/logos/benzinga.svg',
//         tickers: [
//             "AMZN",
//             "AAPL"
//         ],
//         description: '"These companies lead some of the most lucrative industries and have bright outlooks in the news year.',
//         published_utc: '2024-01-02T10:05:00Z',
//         article_url: 'https://www.fool.com/investing/2024/01/02/better-growth-stock-in-2024-amazon-vs-apple/'
//     },
//     {
//         id: "aBS3Oyv5swXxMT1OBXOZARABwEszNCJNswHpEf69aAg",
//         title: 'Legendary Investor Jim Rogers Predicts Market Bubble,Positions To Short Tesla, Apple And Other Magnificent Seven',
//         author: 'newsfeedback@fool.com (Dani Cook)',
//         logo_url: 'https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg',
//         tickers: [
//             "AMZN",
//             "AAPL"
//         ],
//         description: 'Gene Munster’s Deepwater Asset Management tasted success with its 2023 predictions. Now, it’s out with tech predictions for 2024.\\nA Record To Cherish: Out of the eight predictions that Deepwater made for 2023, seven came to pass. This gives the venture capital firm a success core of 87.5%.\\nThe Munster co-founded firm was wrong about the timeline for Tesla, Inc.’s (NASDAQ:TSLA) Model 2, which is now referred to as robotaxi. As opposed to its previous estimate of 2024, the firm now sees a delay until 2025. \\nAmong those that fructified was the outperformance of the FAANG — the moniker for a group of mega-cap tech stocks.\\nDeepwater also called for:\\n\\nApple, Inc.’s (NASDAQ:AAPL) headset launch in late 2023\\nprivate-equity companies taking tech companies private\\nUnicorns going bankrupt\\nAnd Ford Motor Co.’s (NYSE:F) Lightning EV pickup truck outselling Tesla’s Cybertruck. \\n\\nThe firm also expected the year-end fed funds rate at 5.50% and the market rebounding in 2023.\\nSee Also: Best Artificial Intelligence Stocks\\nHere’s what Deepwater predicts for ...Full story available on Benzinga.com',
//         published_utc: '2024-01-02T10:05:00Z',
//         article_url: 'https://www.fool.com/investing/2024/01/02/better-growth-stock-in-2024-amazon-vs-apple/'
//     }
// ]
const ResultsBlock = () => {
    const data=useAllNews();
    console.log(data);
    return (
        <div className={s.resultsBlock}>
            <div className={s.container}>
                <h2 className={s.sectionTitle}>Related Articles:</h2>
                <div className={s.flexWrapper}>
                    {
                        // data.map((result) =>
                        //     <ResultBlock key={result.id}
                        //                  logo_url={result.logo_url}
                        //                  title={result.title}
                        //                  author={result.author}
                        //                  published_utc={result.published_utc}
                        //                  description={result.description}
                        //                  article_url={result.article_url}
                        //     />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultsBlock;
