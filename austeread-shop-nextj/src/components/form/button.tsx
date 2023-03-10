import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "../icons/spinner";
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "small" | "normal";
}
export default function ButtonCustom({ size = "normal", className, children, ...props }: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        `px-2 sm:px-3 py-0 sm:py-2 font-medium text-center text-white bg-primary rounded-lg hover:bg-primary/80 focus:ring focus:outline-none focus:ring-primary/70 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary/80 relative overflow-hidden whitespace-nowrap`,
        className
      )}
    >
      {children}
      {props.disabled && (
        <div role="status" className="absolute inset-0 bg-black/5 backdrop-blur-sm">
          <div className="relative flex justify-center items-center h-full">
            <Spinner className="w-8 h-8" />
          </div>
        </div>
      )}
    </button>
  );
}
