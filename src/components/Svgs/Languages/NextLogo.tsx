import * as React from 'react';
import { Svg } from '../../../types/Svg';

export const NextLogo = (props: Svg) => {
  return (
    <svg
      width={92}
      height={92}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_19_780)">
        <path
          d="M46 0C20.628 0 0 20.628 0 46s20.628 46 46 46c8.05 0 15.597-2.084 22.138-5.678l-33.35-46.575v26.306H29.9v-36.01h4.888l36.296 54.482C83.662 76.331 92 62.172 92 46 92 20.628 71.372 0 46 0zm15.884 60.806l-5.39-8.122v-22.64h5.39v30.762z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_780">
          <path fill="#fff" d="M0 0H92V92H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
