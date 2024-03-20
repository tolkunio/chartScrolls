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
        'M12.667 8.66668H3.33366C3.15685 8.66668 2.98728 8.59644 2.86225 8.47141C2.73723 8.34639 2.66699 8.17682 2.66699 8.00001C2.66699 7.8232 2.73723 7.65363 2.86225 7.52861C2.98728 7.40358 3.15685 7.33334 3.33366 7.33334H12.667C12.8438 7.33334 13.0134 7.40358 13.1384 7.52861C13.2634 7.65363 13.3337 7.8232 13.3337 8.00001C13.3337 8.17682 13.2634 8.34639 13.1384 8.47141C13.0134 8.59644 12.8438 8.66668 12.667 8.66668Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
