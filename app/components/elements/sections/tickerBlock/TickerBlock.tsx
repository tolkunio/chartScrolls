import s from './TickerBlock.module.scss';
import Image from "next/image";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import DropDown from "@/app/components/common/dropDown/DropDown";
import {tickerList} from "@/app/services/news/ticket.service";
import {ITicker} from "@/app/services/news/ticket.service";


const TickerBlock = () => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectTicker, setSelectTicker] = useState<string>(tickerList[0].shortName);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDateChange = date => {
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        setEndDate(date);
    };
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    }
    const tickerSelection =(shortName:string)=>{
        setSelectTicker(shortName);
    }

    return (
        <div className={s.tickerBlock}>
            <div className={s.container}>
                <div className={s.mainFlexWrapper}>
                    <div className={s.flexWrapper}>
                        <div className={s.chooseTicker}>
                            <span> Choose a ticker:</span>
                            <button onClick={toggleDropDown}>
                                {tickerList[0].name}
                                <Image src={'/icons/arrow-down.svg'} alt={'arrow-down'} width={14} height={7}/>
                            </button>
                            {
                                showDropDown && (<div className={s.dropDown}>
                                                    <DropDown tickers={tickerList}
                                                              showDropDown={true}
                                                              toggleDropDown={toggleDropDown}
                                                              tickerSelection={tickerSelection}/>
                                                </div>)
                            }
                        </div>
                        <div className={s.pickupDate}>
                            <span>Pick up the date:</span>
                            <div className={s.datePickerBlock}>
                                <div className={s.block}>
                                    <span>from</span>
                                    <DatePicker
                                        className={s.customDatePicker}
                                        dateFormat="MMMM d, yyyy"
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        startDate={startDate}
                                    />
                                </div>
                                <div className={s.block}>
                                    <span>to</span>
                                    <DatePicker
                                        className={s.customDatePicker}
                                        dateFormat="MMMM d, yyyy"
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        endDate={endDate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.btnWrapper}>
                        <button className={s.submit}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TickerBlock;
