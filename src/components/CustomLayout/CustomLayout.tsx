import React from "react";
import { I_CustomLayoutProps } from "./model";

export const CustomLayout = ({ children }: I_CustomLayoutProps) => {
  return (
    <div className="main">
      <div className="lay-sidebar">{children}</div>
    </div>
  );
};
