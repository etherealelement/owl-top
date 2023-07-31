import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface  ProductCommentsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userName: string;
    userAvatar?: string;
    date: string;
    userFeedback: string;
    userRating: number;
}