import cx from "@/helper/cx";
import React from "react";

interface LayoutCardProps {
  children: React.ReactNode;
  className?: string;
}

function LayoutCard({ children, className }: LayoutCardProps, props: any) {
  return (
    <div className={cx("shadow-neomorphism  bg-backgroundCard", className)}>
      {children}
    </div>
  );
}

export default LayoutCard;
