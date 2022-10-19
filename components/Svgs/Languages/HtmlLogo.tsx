import * as React from "react"
import { Svg } from "../../../types/Svg"

export const HtmlLogo = (props: Svg) => {
  return (
    <svg
      width={80}
      height={92}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.23 3.046l5.906 76.388a2.82 2.82 0 001.942 2.472l31.077 9.962c.55.176 1.14.176 1.69 0l31.078-9.962a2.82 2.82 0 001.941-2.473L79.77 3.046C79.897 1.403 78.613 0 76.984 0H3.016C1.386 0 .103 1.403.23 3.046zm64.395 23.7H26.133l1.162 10.83h36.492L61.4 68.45 40 75.309l-21.4-6.86-1.247-16.13h11.232v7.913L40.3 63.41l11.645-3.178.904-12.61h-35.86L14.61 16.83h50.782l-.767 9.916z"
        fill="#FC490B"
      />
    </svg>
  )
}

