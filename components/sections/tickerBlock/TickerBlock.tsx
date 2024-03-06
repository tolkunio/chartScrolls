import s from './TickerBlock.module.scss';
import {useState} from "react";
import {Select} from "@/components/ui/select/Select";
import {tickerList} from "@/assets/services/ticket.service";
import {useRouter} from "next/router";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TickerBlock = () => {
    const [selectTicker, setSelectTicker] = useState<string>(tickerList[0].shortName);
    const [startDate, setStartDate] = useState<Date|null>(null);
    const [endDate, setEndDate] = useState<Date|null>(null);
    const router = useRouter();

    const onChangetickerSelection = (shortName: string) => {
        setSelectTicker(shortName);
    }
    const handleStartDateChange = (date:Date|null) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date:Date|null) => {
        setEndDate(date);
    };

    const onClickHandler = () => {
        router.push({
            pathname:'/news',
            query:{
                startDate:startDate?.toISOString(),
                endDate:endDate?.toISOString(),
                ticker:selectTicker
            }
        });
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
                        <button onClick={onClickHandler} className={s.submit}>Submit</button>
                    </div>
                </div>

            </div>
        </div>

)
    ;
};

export default TickerBlock;
