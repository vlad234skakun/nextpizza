import * as React from "react";

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.333 16.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM14.333 16.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM4.78 5h11.554l-1.12 5.593a1.334 1.334 0 0 1-1.334 1.074H6.834a1.333 1.333 0 0 1-1.334-1.16l-1.013-7.68a1.333 1.333 0 0 0-1.32-1.16h-1.5"
    />
  </svg>
);

export default CartIcon;
