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
    <g filter={'url(#filter0_d_48_71544)'}>
      <rect
        fill={'white'}
        height={'24'}
        rx={'12'}
        shapeRendering={'crispEdges'}
        width={'24'}
        x={'9'}
        y={'7'}
      />
      <g clipPath={'url(#clip0_48_71544)'}>
        <path
          d={
            'M21 11C16.5817 11 13 14.5817 13 19C13 23.4183 16.5817 27 21 27C25.4183 27 29 23.4183 29 19C29 14.5817 25.4183 11 21 11Z'
          }
          fill={'#40B3E0'}
        />
        <path
          d={
            'M24.8919 15.6019L23.463 22.8061C23.463 22.8061 23.2632 23.3057 22.7136 23.0659L19.4162 20.5379L18.2172 19.9584L16.1989 19.2789C16.1989 19.2789 15.8891 19.1691 15.8591 18.9292C15.8292 18.6894 16.2089 18.5596 16.2089 18.5596L24.2324 15.4121C24.2324 15.4121 24.8919 15.1223 24.8919 15.6019Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M19.1643 22.7252C19.1643 22.7252 19.0681 22.7162 18.9481 22.3365C18.8282 21.9568 18.2188 19.9584 18.2188 19.9584L23.0648 16.8809C23.0648 16.8809 23.3446 16.711 23.3346 16.8809C23.3346 16.8809 23.3846 16.9109 23.2347 17.0507C23.0848 17.1907 19.4278 20.478 19.4278 20.478'
          }
          fill={'#D2E5F1'}
        />
        <path
          d={
            'M20.6818 21.5072L19.3776 22.6963C19.3776 22.6963 19.2756 22.7737 19.1641 22.7252L19.4138 20.5164'
          }
          fill={'#B5CFE4'}
        />
      </g>
    </g>
    <defs>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'42'}
        id={'filter0_d_48_71544'}
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
          result={'effect1_dropShadow_48_71544'}
        />
        <feBlend
          in={'SourceGraphic'}
          in2={'effect1_dropShadow_48_71544'}
          mode={'normal'}
          result={'shape'}
        />
      </filter>
      <clipPath id={'clip0_48_71544'}>
        <rect fill={'white'} height={'16'} transform={'translate(13 11)'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
