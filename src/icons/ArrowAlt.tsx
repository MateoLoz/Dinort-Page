"use cleint"

import React from "react"

type ArrowAltProps = React.SVGProps<SVGSVGElement>;


const ArrowAlt : React.FC<ArrowAltProps> = (props) => {
  return(
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    version="1"
    viewBox="0 0 64 64"
  >
    <path d="M24.8 6.3C7.6 11.2-.2 32.7 10.1 46.9c9.8 13.6 27.5 15.6 39.8 4.5 11.5-10.3 11.5-28.5-.1-38.9-7-6.4-16.2-8.6-25-6.2m9.6 14.3c.3.9.6 4.5.6 8.1v6.5l3.5-3.1c3.6-3.1 6.5-3.2 6.5-.3C45 33.9 34.1 45 32.1 45 30 45 19 34 19 31.9c0-3 2.9-2.9 6.5.2l3.5 3.1v-7.4c0-4.1.3-7.8.7-8.1 1.2-1.3 4.1-.7 4.7.9"></path>
  </svg>
  )
}

export default ArrowAlt;