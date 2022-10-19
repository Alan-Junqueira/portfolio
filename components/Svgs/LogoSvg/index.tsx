import * as React from 'react';
import { SVGAttributes } from 'react';

interface LogoSvgProps extends SVGAttributes<HTMLOrSVGElement> {}

export function LogoSvg(props: LogoSvgProps) {
  return (
    <svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.175 12.693l-3.654 7.624c.498 1.006.993 2.012 1.487 3.02l.693 1.408.569 1.158c.971 1.975 1.943 3.95 2.916 5.923.373.757.747 1.512 1.121 2.268.792 1.601 1.61 3.253 2.408 4.884.007.015.015.038.022.038H16.039L13.066 45H45L29.175 12.693z"
        fill="url(#paint0_linear_6_109)"
      />
      <path
        d="M26.314 7.822L22.532 0l-3.777 7.78 3.777 7.863 3.782-7.821z"
        fill="url(#paint1_linear_6_109)"
      />
      <path
        d="M22.545 28.404l-7.082.063h-.007c.024 0 .049-.066.075-.114.045-.085.09-.155.132-.24 1.09-2.236 2.207-4.499 3.287-6.693l.389-.788-.53-1.105.002-.003s-.034-.065-.092-.183l-3.048-6.36L0 45h6.623l-.006-.126.006.126h.772c.032-.126.063-.133.09-.193.318-.668.651-1.346.974-2l.376-.765.891-1.818 2.028-4.137.072-.161c.198-.404.401-.783.657-1.255h12.962l-2.9-6.267z"
        fill="url(#paint2_linear_6_109)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_109"
          x1={79.2645}
          y1={-42.3087}
          x2={142.599}
          y2={-42.3087}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset={0.515464} stopColor="#FCDC85" />
          <stop offset={1} stopColor="#64411A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_109"
          x1={89.7073}
          y1={-82.9316}
          x2={104.613}
          y2={-82.9316}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset={0.515464} stopColor="#FCDC85" />
          <stop offset={1} stopColor="#64411A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6_109"
          x1={39.0037}
          y1={-22.9257}
          x2={82.7408}
          y2={-22.9257}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset={0.515464} stopColor="#FCDC85" />
          <stop offset={1} stopColor="#64411A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
