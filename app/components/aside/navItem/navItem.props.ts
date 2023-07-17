import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NavItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    courseName: "Курсы" | "Сервисы" | "Книги" | "Товары";
}