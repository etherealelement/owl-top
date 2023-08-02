import {DetailedHTMLProps, HTMLAttributes} from "react";

export  interface ProductVacancyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    vacancyName: string;
    vacancyTotal: number;
    vacancyEasy: string;
    vacancyMiddle: string;
    vacancyHard: string;
}