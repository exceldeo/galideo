import cx from "@/helper/cx";
import React from "react";

interface LayoutCardProps {
  children: React.ReactNode;
}

function LayoutCard({ children }: LayoutCardProps, props: any) {
  return (
    <div className={cx("shadow-neomorphism rounded-[80px] bg-backgroundCard")}>
      {children}
    </div>
  );
}

export default LayoutCard;
