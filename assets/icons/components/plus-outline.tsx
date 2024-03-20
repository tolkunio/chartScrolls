import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12.667 7.33332H8.66699V3.33332C8.66699 3.15651 8.59675 2.98694 8.47173 2.86192C8.34671 2.73689 8.17714 2.66666 8.00033 2.66666C7.82351 2.66666 7.65394 2.73689 7.52892 2.86192C7.4039 2.98694 7.33366 3.15651 7.33366 3.33332V7.33332H3.33366C3.15685 7.33332 2.98728 7.40356 2.86225 7.52858C2.73723 7.65361 2.66699 7.82318 2.66699 7.99999C2.66699 8.1768 2.73723 8.34637 2.86225 8.47139C2.98728 8.59642 3.15685 8.66666 3.33366 8.66666H7.33366V12.6667C7.33366 12.8435 7.4039 13.013 7.52892 13.1381C7.65394 13.2631 7.82351 13.3333 8.00033 13.3333C8.17714 13.3333 8.34671 13.2631 8.47173 13.1381C8.59675 13.013 8.66699 12.8435 8.66699 12.6667V8.66666H12.667C12.8438 8.66666 13.0134 8.59642 13.1384 8.47139C13.2634 8.34637 13.3337 8.1768 13.3337 7.99999C13.3337 7.82318 13.2634 7.65361 13.1384 7.52858C13.0134 7.40356 12.8438 7.33332 12.667 7.33332Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
