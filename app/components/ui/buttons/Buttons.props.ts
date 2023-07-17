import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: "active" | "ghost";
    children: ReactNode;
}