import * as RadixSelect from '@radix-ui/react-select'
import  s from './Select.module.scss';
import {ReactNode,ElementRef,forwardRef,ComponentPropsWithoutRef} from "react";

import Image from "next/image";

import {SelectItem} from "@/app/components/common/select/SelectItem/SelectItem";
import {ITicker} from "@/app/services/news/ticket.service";

export type SelectProps = {
    options:ITicker []
    placeholder?: ReactNode
    label?: string
    className?: string
}
export const Select=forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            options,
            placeholder = 'Select value...',
            label,
            value,
            onValueChange,
            fullWidth,
            disabled,
            className,
            ...restProps
        },
        ref?
    ) => {
        const currentItem = options.find(item => item.shortName == value).name
        return(
            <div className={s.wrapper}>
                <RadixSelect.Root
                    value={value}
                    onValueChange={onValueChange}
                    disabled={disabled}>
                    {label}
                    <RadixSelect.Trigger className={s.trigger} aria-label="select">
                        <p className={s.text}>
                            {currentItem}
                        </p>
                        <RadixSelect.Icon className={s.icon}>
                            <Image src={'/icons/select-arrow.svg'} width={24} height={24} alt={'arrow-down'}/>
                        </RadixSelect.Icon>
                    </RadixSelect.Trigger>
                    <RadixSelect.Portal>
                        <RadixSelect.Content ref={ref} className={s.content} position="popper">
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