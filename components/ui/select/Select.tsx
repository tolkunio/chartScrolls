import * as RadixSelect from '@radix-ui/react-select'
import  s from './Select.module.scss';
import {ReactNode,forwardRef} from "react";
import Image from "next/image";
import {SelectItem} from "@/components/ui/select/SelectItem/SelectItem";
import {ITicker} from "@/assets/services/ticket.service";
import {useState} from "react";
import {ArrowUp} from "@/assets/icons";
import {ArrowDown} from "@/assets/icons";

export type SelectProps = {
    options:ITicker []
    placeholder?: ReactNode
    label?: string
    className?: string
    value:string
    onValueChange: (value: string) => void
}
export const Select=forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            options,
            placeholder = 'Select value...',
            label,
            value,
            onValueChange,
            className,
            ...restProps
        },
        ref?
    ) => {
        const currentItem = options.find(item => item.shortName == value);
        const [isOpen, setIsOpen] = useState(false)

        return(
            <div className={s.wrapper}>
                <RadixSelect.Root
                    value={value}
                    onValueChange={onValueChange}
                    onOpenChange={setIsOpen}>
                    <RadixSelect.Trigger className={s.trigger} aria-label="select">
                        <p className={s.text}>
                            {`${currentItem?.name}`}
                        </p>
                        <RadixSelect.Icon className={s.icon}>
                            {isOpen ? <ArrowUp className={'icon'} /> : <ArrowDown className={'icon'} />}
                        </RadixSelect.Icon>
                    </RadixSelect.Trigger>
                    <RadixSelect.Portal>
                        <RadixSelect.Content ref={ref}  className={s.content} collisionPadding={0} position={'popper'}>
                            <RadixSelect.Viewport>
                                {options.map(option => (
                                    <SelectItem className={s.item} key={option.name} value={option.shortName}>
                                        {option.name}
                                    </SelectItem>
                                ))}
                            </RadixSelect.Viewport>
                        </RadixSelect.Content>
                    </RadixSelect.Portal>
                </RadixSelect.Root>
            </div>

        )
})
Select.displayName='Select'