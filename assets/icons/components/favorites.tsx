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
        'M4.05989 14.041C3.88308 14.041 3.71351 13.9708 3.58849 13.8457C3.46346 13.7207 3.39322 13.5512 3.39322 13.3743L3.29322 3.60101C3.2852 3.40257 3.31648 3.2045 3.38527 3.0182C3.45407 2.8319 3.55902 2.66103 3.69408 2.51543C3.82915 2.36984 3.99167 2.25238 4.17229 2.16981C4.35291 2.08725 4.54808 2.04121 4.74656 2.03434L11.1399 2.00101C11.3386 2.00448 11.5347 2.04707 11.717 2.12635C11.8993 2.20562 12.0642 2.32003 12.2022 2.46304C12.3403 2.60605 12.4488 2.77485 12.5216 2.95981C12.5944 3.14477 12.6301 3.34227 12.6266 3.54101L12.7199 13.3143C12.721 13.4312 12.6915 13.5462 12.6341 13.648C12.5768 13.7498 12.4937 13.8348 12.3932 13.8943C12.2919 13.9529 12.1769 13.9837 12.0599 13.9837C11.9429 13.9837 11.8279 13.9529 11.7266 13.8943L7.92656 11.7877L4.39989 13.941C4.29546 13.9993 4.17927 14.0335 4.05989 14.041V14.041ZM7.89989 10.341C8.01573 10.3412 8.12991 10.3686 8.23322 10.421L11.3732 12.161L11.2932 3.52767C11.2932 3.39434 11.2066 3.30101 11.1532 3.30767L4.75322 3.36767C4.69989 3.36767 4.62656 3.45434 4.62656 3.58767L4.70656 12.1877L7.55989 10.4343C7.66352 10.375 7.78049 10.3429 7.89989 10.341V10.341Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
