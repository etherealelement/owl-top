import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    type: "big" | "small" | "medium" | "bold" | "bold_small" | "bold_small_sort";
    children: ReactNode;

}