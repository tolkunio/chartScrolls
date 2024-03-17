import s from './TickerBlock.module.scss';
import {useState, useEffect} from "react";
import {Select} from "@/components/ui/select/Select";
import {tickerList} from "@/assets/services/ticket.service";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {IResponse} from "@/assets/api/chart-scrolls-api";
import {API} from "@/assets/api/api";
import NotFound from "@/pages/404";
import axios from "axios";

type PropsType = {
    setIsLoading: (isLoading: boolean) => void
    onClickResponseUpdate: (news: IResponse) => void
}
const TickerBlock = ({onClickResponseUpdate, setIsLoading}: PropsType) => {
    const [selectTicker, setSelectTicker] = useState<string>(tickerList[0].shortName);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    useEffect(() => {
        setSelectTicker(selectTicker);
    }, [selectTicker]);

    const onChangetickerSelection = (shortName: string) => {
        setSelectTicker(shortName);
    }
    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };
    const handleClick = async () => {
        setIsLoading(true);
        const news = await axios.get<IResponse>('https://vertex-api-417118.uc.r.appspot.com/response',{
            params:{
                firstDate: startDate?.toISOString() || '',
                lastDate: endDate?.toISOString() || '',
                ticker: selectTicker
            }
        }).then(res=>res.data);

        if (!news) {
            setIsLoading(false);

        }
        onClickResponseUpdate(news);
        setIsLoading(false);
    }

    return (
        <div className={s.tickerBlock}>
            <div className={s.container}>
                <div className={s.mainFlexWrapper}>
                    <div className={s.flexWrapper}>
                        <div className={s.chooseTicker}>
                            <span> Choose a ticker:</span>
                            <Select value={selectTicker} options={tickerList}
                                    onValueChange={onChangetickerSelection}/>
                        </div>
                        <div className={s.pickupDate}>
                            <span>Pick up the date:</span>
                            <div className={s.datePickerBlock}>
                                <div className={s.block}>
                                    <span>from</span>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        isClearable
                                        showYearDropdown
                                        scrollableYearDropdown
                                    />
                                </div>
                                <div className={s.block}>
                                    <span>to</span>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        isClearable
                                        showYearDropdown
                                        scrollableYearDropdown
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.btnWrapper}>
                        <button onClick={handleClick} className={s.submit}>Submit</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TickerBlock;
