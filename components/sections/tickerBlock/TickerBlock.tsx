import s from './TickerBlock.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Select} from "@/components/ui/select/Select";
import {tickerList} from "@/assets/services/ticket.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useRouter} from "next/router";

const TickerBlock = () => {
    const [selectTicker, setSelectTicker] = useState<string>(tickerList[0].shortName);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const router = useRouter();

    const onChangetickerSelection = (shortName: string) => {
        setSelectTicker(shortName);
    }

    const onClickHandler = () => {
        router.push({
            pathname:'/news',
            query:{
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                ticker:selectTicker
            }
        });
        setSelectTicker(tickerList[0].shortName);
        setStartDate(null);
        setEndDate(null);
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
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat={'dd/MM/yyyy'}
                                    />
                                </div>
                                <div className={s.block}>
                                    <span>from</span>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        dateFormat={'dd/MM/yyyy'}
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
