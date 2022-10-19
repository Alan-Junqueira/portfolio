import * as React from 'react';
import { SVGAttributes } from 'react';

interface SwitcherSumProps extends SVGAttributes<HTMLOrSVGElement> {}

export const SwitcherSum = (props: SwitcherSumProps) => {
  return (
    <svg
      width={30}
      height={31}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.551 15.529c0 4.035 3.332 7.318 7.427 7.318 4.096 0 7.427-3.283 7.427-7.318 0-4.036-3.331-7.318-7.427-7.318-4.095 0-7.427 3.282-7.427 7.318zm7.427-4.395c2.46 0 4.46 1.971 4.46 4.395 0 2.423-2 4.395-4.46 4.395-2.459 0-4.46-1.972-4.46-4.395 0-2.424 2.001-4.395 4.46-4.395zm-1.486 14.625h2.967v4.385h-2.967v-4.385zm0-24.846h2.967v4.385h-2.967V.913zM.142 14.067h4.45v2.923H.142v-2.923zm25.217 0h4.45v2.923h-4.45v-2.923zM3.437 24.828l3.144-3.101 2.1 2.067-3.146 3.101-2.098-2.067zm17.83-17.566l3.148-3.101 2.098 2.066-3.148 3.102-2.097-2.067zM6.587 9.33L3.438 6.23l2.099-2.067 3.145 3.102L6.586 9.33zm19.927 15.5l-2.098 2.067-3.147-3.102 2.097-2.067 3.148 3.102z"
        fill="currentColor"
      />
    </svg>
  );
};
