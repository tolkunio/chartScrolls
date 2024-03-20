import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

export type TypographyType<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'body2SemiBold'
    | 'caption'
    | 'captionLink'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'link1'
    | 'link2'
    | 'subtitle'
    | 'subtitle2'
    | 'subtitle2Link'
    | 'subtitleLink'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyType<T>>
) => {
  const { as: Component = 'p', className, text, variant = 'body1', ...rest } = props
  const typographyClasses = clsx(s[variant], className)

  return <Component className={typographyClasses} {...rest} />
}
