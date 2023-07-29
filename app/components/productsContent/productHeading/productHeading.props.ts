import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProductHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    coursesCount: number;
}