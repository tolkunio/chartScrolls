import s from './TickerBlock.module.scss';
import Image from "next/image";
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import DropDown from "@/app/components/common/dropDown/DropDown";
import {tickerList} from "@/app/services/news/ticket.service";
import {ITicker} from "@/app/services/news/ticket.service";
import {DatePicker} from "@/app/components/common/datePicker/DatePicker";
import {Select} from "@/app/components/common/select/Select";


const TickerBlock = () => {
    const [showSelect, setShowSelect] = useState<boolean>(false);
    const [selectTicker, setSelectTicker] = useState<string>(tickerList[0].shortName);
    const [startDate, setStartDate] = useState<Date>(null);
    const [endDate, setEndDate] = useState<Date>(null);

    const toggleSelect = () => {
        setShowSelect(!showSelect);
    }
    const onChangetickerSelection =(shortName:string)=>{
        setSelectTicker(shortName);
    }

    let args= {
            placeholder: 'Choose data period',
            disabled: false,
    };
    return (
        <div className={s.tickerBlock}>
            <div className={s.container}>
                <div className={s.mainFlexWrapper}>
                    <div className={s.flexWrapper}>
                        <div className={s.chooseTicker}>
                            <span> Choose a ticker:</span>
                            <Select value={selectTicker} options={tickerList} onValueChange={onChangetickerSelection}/>
                        </div>
                        <div className={s.pickupDate}>
                            <span>Pick up the date:</span>
                            <div className={s.datePickerBlock}>
                                <div className={s.block}>
                                    <span>Date range</span>
                                    <DatePicker
                                        placeholder={'choose period'}
                                        startDate={startDate}
                                        setStartDate={setStartDate}
                                        endDate={endDate}
                                        setEndDate={setEndDate}
                                        {...args}
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
