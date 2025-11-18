type ArrowProps = React.SVGProps<SVGSVGElement>;

export const LightArrow = ({width = 20, height = 8, fill = '#fff', transform = 'none'} : ArrowProps) => {
    return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    version="1"
    viewBox="0 0 64 64"
    transform={transform}
  >
    <path d="M44.4 16.1c-.3.6 2.2 3.9 5.7 7.5l6.3 6.4H28.2C.7 30 0 30 0 32s.7 2 28.2 2h28.2l-6.3 6.4c-5.8 5.9-7 8.6-3.8 8.6.7 0 5-3.8 9.7-8.5l8.5-8.5-8.5-8.5c-8.3-8.4-10.2-9.6-11.6-7.4"></path>
  </svg>
    )
}