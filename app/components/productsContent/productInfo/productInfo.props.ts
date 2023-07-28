import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ProductInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    categoryCourse: string;
    categoryCourseName: string;
    price: number;
    credit: number;
    reviews: number;
    descr: string;
    completionDocument: string;
    complexity: string;
    duration: string;
    advantages: string;
    disadvantages: string;
    warranty: boolean;
}