import cx from "@/helper/cx";
import React from "react";

interface CollapseWithPlusIconProps {
  index: number;
  title: string;
  content: string;
  className?: string;
}

function CollapseWithPlusIcon({
  index,
  title,
  content,
  className,
}: CollapseWithPlusIconProps) {
  return (
    <div
      tabIndex={index}
      className={cx(
        "du-collapse du-collapse-plus bg-white rounded-3xl",
        className
      )}
    >
      <div className="du-collapse-title text-xl font-medium">{title}</div>
      <div className="du-collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CollapseWithPlusIcon;
