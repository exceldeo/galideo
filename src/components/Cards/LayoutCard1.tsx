import cx from "@/helper/cx";
import React from "react";

interface LayoutCardProps {
  children: React.ReactNode;
  className?: string;
}

function LayoutCard1({ children, className }: LayoutCardProps, props: any) {
  return (
    <div
      className={cx("shadow-neomorphsmStyle1  bg-backgroundCard", className)}
    >
      {children}
    </div>
  );
}

export default LayoutCard1;
