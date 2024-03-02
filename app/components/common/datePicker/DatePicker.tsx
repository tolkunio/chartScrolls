import {ComponentProps, FC, forwardRef} from 'react'
import ReactDatePicker from 'react-datepicker'
import {ReactDatePickerCustomHeaderProps} from 'react-datepicker'
import s from './DatePicker.module.scss'
import Image from "next/image";
import clsx from "clsx";
import { format } from 'date-fns'


export type DatePickerProps = {
    disabled?: boolean
    endDate: Date
    label?: string
    placeholder?: string
    setEndDate: (date: Date ) => void
    setStartDate: (date: Date ) => void
    startDate: Date
} & ComponentProps<'div'>
export const DatePicker: FC<DatePickerProps> = ({
                                                    className,
                                                    disabled,
                                                    endDate,
                                                    label,
                                                    placeholder,
                                                    setEndDate,
                                                    setStartDate,
                                                    startDate,
                                                    ...rest
                                                }) => {
    const classNames = {
        calendar: s.calendar,
        day: () => s.day,
        input: s.input,
        root: clsx(s.root, className)
    }
    const onChangeDatePickerHandler = (dates: [Date]) => {
            const [start, end] = dates
            setStartDate(start);
            setEndDate(end);
    }

    return (
        <div className={classNames.root} {...rest}>
            <ReactDatePicker
                calendarClassName={classNames.calendar}
                calendarStartDate={1}
                className={classNames.input}
                customInput={<CustomInput disabled={disabled}/>}
                dateFormat={'dd/MM/yyyy'}
                dayClassName={classNames.day}
                disabled={disabled}
                endDate={endDate}
                formatWeekDay={formatWeekDay}
                onChange={onChangeDatePickerHandler}
                placeholder={placeholder}
                renderCustomHeader={CustomHeader}
                selected={startDate}
                selectsRange={true}
                startDate={startDate}
            />
        </div>
    )
}
type CustomInputType = {
    disabled?: boolean | undefined
}
const CustomInput = forwardRef<HTMLInputElement, CustomInputType>(
    ({disabled, ...rest}, ref) => {
        const className={
            icon:s.icon,
            inputContainer: s.inputContainer
        }
        return (
            <div className={className.inputContainer}>
                <input disabled={disabled} ref={ref} {...rest}/>
                <div className={className.icon}>
                    <Image src={'/icons/calendar.svg'} width={24} height={24} alt={'calendar'}/>
                </div>
            </div>

        )
    }
)
CustomInput.displayName = 'CustomInput';
const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
    const classNames = {
        button: s.button,
        buttonBox: s.buttonBox,
        header: s.header,
    }

    const headerText = capitalizeFirstLetter(format(date, 'LLLL y', ))
    return (
        <div className={classNames.header}>
            <div>{headerText}</div>
            <div className={classNames.buttonBox}>
                <button className={classNames.button} onClick={decreaseMonth} type={'button'}>
                    <Image src={'/icons/arrow-left.svg'} width={10} height={11} alt={''}/>
                </button>

                <button className={classNames.button} onClick={increaseMonth}>
                    <Image src={'/icons/arrow-right.svg'} width={10} height={11} alt={''}/>
                </button>
            </div>
        </div>
    )
}

// const formatWeekDay = (day: Date) => capitalizeFirstLetter(format(day, 'iiiiii', { locale: ru }))
const formatWeekDay = (day: string) => capitalizeFirstLetter(day.substring(0, 1))

const capitalizeFirstLetter = (text: string) => {
    return text[0].toUpperCase() + text.slice(1)
}
