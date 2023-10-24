import React from "react";
import { ITitleProps } from "./model";

export const Title = ({ title }: ITitleProps) => {
  return (
    <div className="com-titleWithfollow hlp-marginBottom-15">
      <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
    </div>
  );
};
