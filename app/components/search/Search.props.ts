import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
    sizeInput: "medium" | "small";
}