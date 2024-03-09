import * as RadixSelect from '@radix-ui/react-select'
import  s from './Select.module.scss';
import {ReactNode,forwardRef} from "react";
import Image from "next/image";
import {SelectItem} from "@/components/ui/select/SelectItem/SelectItem";
import {ITicker} from "@/assets/services/ticket.service";

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
        const currentItem = options.find(item => item.shortName == value)
        return(
            <div className={s.wrapper}>
                <RadixSelect.Root
                    value={value}
                    onValueChange={onValueChange}>
                    {label}
                    <RadixSelect.Trigger className={s.trigger} aria-label="select">
                        <p className={s.text}>
                            {`${currentItem.name} (${currentItem.shortName})`}
                        </p>
                        <RadixSelect.Icon className={s.icon}>
                            <Image src={'/icons/select-arrow.svg'} width={24} height={24} alt={'arrow-down'}/>
                        </RadixSelect.Icon>
                    </RadixSelect.Trigger>
                    <RadixSelect.Portal>
                        <RadixSelect.Content ref={ref} position="popper">
                            <RadixSelect.Viewport>
                                {options.map(option => (
                                    <SelectItem key={option.name} value={option.shortName}>
                                        {option.name} ({option.shortName})
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