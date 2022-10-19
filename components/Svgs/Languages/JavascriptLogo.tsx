import * as React from 'react';
import { Svg } from '../../../types/Svg';

export const JavascriptLogo = (props: Svg) => {
  return (
    <svg
      width={80}
      height={92}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_19_728)">
        <path
          d="M6.699 82.363L0 .153 80 .32l-7.083 82.044-32.615 9.483-33.603-9.483z"
          fill="#E9CA32"
        />
        <path
          d="M40.302 83.907V7.983l32.944.11-5.874 67.929-27.07 7.885z"
          fill="#FFDE25"
        />
        <path
          d="M36.774 16.998h-8.71v50.533l-6.774-1.296v-6.802l-8.064-1.296v15.225l23.548 6.154V16.998zm6.534 0h24.111l-1.612 9.685H52.511v15.894h13.294l-1.612 32.08-20.886 4.86V69.474l14.111-4.86.815-13.28-14.926 2.17V16.998z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_728">
          <path fill="#fff" d="M0 0H80V92H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
