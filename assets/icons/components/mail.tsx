import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'42'}
    ref={ref}
    viewBox={'0 0 42 42'}
    width={'42'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g filter={'url(#filter0_d_48_71548)'}>
      <rect
        fill={'white'}
        height={'24'}
        rx={'12'}
        shapeRendering={'crispEdges'}
        width={'24'}
        x={'9'}
        y={'7'}
      />
      <g clipPath={'url(#clip0_48_71548)'}>
        <circle cx={'21'} cy={'19'} fill={'white'} r={'8'} />
        <path d={'M16.75 23.25V15.7211H25.25V23.25'} fill={'#F2F2F2'} />
        <path d={'M21 19.9062L16.75 23.25L16.625 16.625'} fill={'black'} fillOpacity={'0.05'} />
        <path
          d={
            'M16.75 23.25H16.0312C15.6562 23.25 15.3438 22.9375 15.3438 22.5312V15.4688H16.75V23.25Z'
          }
          fill={'#D54C3F'}
        />
        <path d={'M22.9062 23.25H25.3125V15.9688H15.5625'} fill={'black'} fillOpacity={'0.08'} />
        <path d={'M16.0312 14.7812H25.9688L21 18.3125'} fill={'#F2F2F2'} />
        <path
          d={
            'M25.25 23.25H25.9688C26.3438 23.25 26.6562 22.9375 26.6562 22.5312V15.4688H25.25V23.25Z'
          }
          fill={'#B63524'}
        />
        <path
          d={'M16.0312 15.4688L21 19.0625L25.9688 15.4688'}
          stroke={'#DE5145'}
          strokeLinecap={'round'}
          strokeWidth={'2'}
        />
      </g>
    </g>
    <defs>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'42'}
        id={'filter0_d_48_71548'}
        width={'42'}
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
          result={'effect1_dropShadow_48_71548'}
        />
        <feBlend
          in={'SourceGraphic'}
          in2={'effect1_dropShadow_48_71548'}
          mode={'normal'}
          result={'shape'}
        />
      </filter>
      <clipPath id={'clip0_48_71548'}>
        <rect fill={'white'} height={'16'} transform={'translate(13 11)'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
