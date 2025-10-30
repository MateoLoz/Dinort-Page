import React from "react";

type ArrowProps = React.SVGProps<SVGSVGElement>;

export default function Arrow({
  width = 27,
  height = 18,
  fill = "currentColor",
  ...props
}: ArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 27 18"
      {...props}
    >
      <path
        fill={fill}
        d="m25.074 5.437-2.711-2.385a1.01 1.01 0 0 0-1.298 0L16.19 7.344c-.193.168-.52.048-.52-.19v-6.07c0-.445-.41-.807-.918-.807h-3.834c-.508 0-.918.362-.918.807v6.07c0 .24-.328.358-.52.19L4.602 3.052a1.01 1.01 0 0 0-1.297 0L.594 5.44a.74.74 0 0 0 0 1.141l11.57 10.183c.358.314.938.314 1.296.001L25.072 6.58a.74.74 0 0 0 .002-1.143"
      />
    </svg>
  );
}