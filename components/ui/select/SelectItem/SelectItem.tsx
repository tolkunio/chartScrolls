import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'

import s from './SelectItem.module.scss';


type SelectItemProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Item>

export const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({children, className, ...restProps }, ref): JSX.Element => {


    return (
      <RadixSelect.Item ref={ref} className={s.selectItem} {...restProps}>
        <RadixSelect.ItemText>
          <span className={s.text}> {children}</span>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
SelectItem.displayName = 'SelectItem';
