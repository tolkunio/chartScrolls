import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'54'}
    ref={ref}
    viewBox={'0 0 54 54'}
    width={'54'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g filter={'url(#filter0_d_48_71634)'}>
      <rect
        fill={'white'}
        height={'36'}
        rx={'18'}
        shapeRendering={'crispEdges'}
        width={'36'}
        x={'9'}
        y={'7'}
      />
      <g clipPath={'url(#clip0_48_71634)'}>
        <path
          d={
            'M26.9993 25C27.4596 25 27.8327 24.6269 27.8327 24.1667C27.8327 23.7064 27.4596 23.3333 26.9993 23.3333C26.5391 23.3333 26.166 23.7064 26.166 24.1667C26.166 24.6269 26.5391 25 26.9993 25Z'
          }
          fill={'#3781C5'}
        />
        <path
          d={
            'M30.3333 25C30.7936 25 31.1667 24.6269 31.1667 24.1667C31.1667 23.7064 30.7936 23.3333 30.3333 23.3333C29.8731 23.3333 29.5 23.7064 29.5 24.1667C29.5 24.6269 29.8731 25 30.3333 25Z'
          }
          fill={'#3781C5'}
        />
        <path
          d={
            'M23.6673 25C24.1276 25 24.5007 24.6269 24.5007 24.1667C24.5007 23.7064 24.1276 23.3333 23.6673 23.3333C23.2071 23.3333 22.834 23.7064 22.834 24.1667C22.834 24.6269 23.2071 25 23.6673 25Z'
          }
          fill={'#3781C5'}
        />
        <path
          d={
            'M32.8327 17.5H21.166C20.503 17.5 19.8671 17.7634 19.3982 18.2322C18.9294 18.7011 18.666 19.337 18.666 20V32.5C18.6663 32.6477 18.7058 32.7926 18.7804 32.92C18.8551 33.0474 18.9623 33.1526 19.091 33.225C19.2156 33.2956 19.3562 33.3329 19.4993 33.3333C19.6489 33.3333 19.7957 33.293 19.9243 33.2167L23.666 30.95C23.8043 30.8677 23.9635 30.8271 24.1243 30.8333H32.8327C33.4957 30.8333 34.1316 30.5699 34.6005 30.1011C35.0693 29.6323 35.3327 28.9964 35.3327 28.3333V20C35.3327 19.337 35.0693 18.7011 34.6005 18.2322C34.1316 17.7634 33.4957 17.5 32.8327 17.5ZM33.666 28.3333C33.666 28.5543 33.5782 28.7663 33.4219 28.9226C33.2657 29.0789 33.0537 29.1667 32.8327 29.1667H24.1243C23.6692 29.1663 23.2226 29.2902 22.8327 29.525L20.3327 31.025V20C20.3327 19.779 20.4205 19.567 20.5768 19.4107C20.733 19.2545 20.945 19.1667 21.166 19.1667H32.8327C33.0537 19.1667 33.2657 19.2545 33.4219 19.4107C33.5782 19.567 33.666 19.779 33.666 20V28.3333Z'
          }
          fill={'#3781C5'}
        />
      </g>
    </g>
    <defs>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'54'}
        id={'filter0_d_48_71634'}
        width={'54'}
        x={'0'}
        y={'0'}
      >
        <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          type={'matrix'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dy={'2'} />
        <feGaussianBlur stdDeviation={'4.5'} />
        <feComposite in2={'hardAlpha'} operator={'out'} />
        <feColorMatrix type={'matrix'} values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0'} />
        <feBlend
          in2={'BackgroundImageFix'}
          mode={'normal'}
          result={'effect1_dropShadow_48_71634'}
        />
        <feBlend
          in={'SourceGraphic'}
          in2={'effect1_dropShadow_48_71634'}
          mode={'normal'}
          result={'shape'}
        />
      </filter>
      <clipPath id={'clip0_48_71634'}>
        <rect fill={'white'} height={'20'} transform={'translate(17 15)'} width={'20'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
