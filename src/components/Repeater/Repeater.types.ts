import React, { DOMAttributes, ReactNode } from 'react';

type PropsType =
  | (React.InputHTMLAttributes<HTMLInputElement> &
      React.ClassAttributes<HTMLInputElement>)
  | null
  | undefined;

export interface RepeaterPropTypes {
  htmlTag: DOMAttributes<Element>;
  replicableProps?: PropsType;
  specificProps?: Array<PropsType>;
  children?: ReactNode[];
  min?: number;
  max?: number;
  startsWith?: number;
}
