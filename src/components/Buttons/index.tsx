import React from "react";

import cx from "@/helper/cx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "white"
    | "gray"
    | "error"
    | "success";
  outlined?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  wide?: boolean;
  squared?: boolean;
  circle?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  buttonType,
  outlined,
  size = "md",
  wide,
  squared,
  circle,
  isLoading,
  disabled,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cx(
        "du-btn",
        buttonType === "primary"
          ? "du-btn-primary"
          : buttonType === "secondary"
          ? "du-btn-secondary"
          : buttonType === "accent"
          ? "du-btn-accent"
          : buttonType === "ghost"
          ? "du-btn-ghost"
          : buttonType === "error"
          ? "du-btn-error"
          : buttonType === "gray"
          ? "border-none bg-gray-500"
          : buttonType === "success"
          ? "border-none bg-green-500"
          : buttonType === "white"
          ? outlined
            ? "border-white bg-transparent text-white hover:border-white hover:bg-primary"
            : "border-none bg-white text-primary hover:bg-gray-50"
          : "",
        outlined ? "du-btn-outline" : "",
        size === "xs"
          ? "du-btn-xs"
          : size === "sm"
          ? "du-btn-sm"
          : size === "lg"
          ? "height-[2rem] du-btn-lg"
          : "",
        wide ? "du-btn-wide" : "",
        squared ? "du-btn-square" : "",
        circle ? "du-btn-circle" : "",
        disabled ? "du-btn-disabled" : "",
        isLoading ? "du-btn-disabled" : "",
        className ?? ""
      )}
      disabled={disabled}
      {...rest}
    >
      <span
        className={cx(
          "relative flex gap-2 whitespace-nowrap",
          isLoading ? "opacity-70" : ""
        )}
      >
        {children}
      </span>
      {isLoading ? <span className="absolute max-w-fit"></span> : <></>}
    </button>
  );
};

export default Button;
