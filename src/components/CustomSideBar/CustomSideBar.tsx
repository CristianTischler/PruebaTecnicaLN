import React from "react";
import { I_CustomSideBarProps } from "./model/Interface";

export const CustomSideBar = ({ children, type }: I_CustomSideBarProps) => {
  switch (type) {
    case "main":
      return <div className="sidebar__main">{children}</div>;
    case "aside":
      return <div className="sidebar__aside">{children}</div>;
  }
};
