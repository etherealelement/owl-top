import {DetailedHTMLProps, HTMLAttributes} from "react";

type Advantages = {
    id: number;
    name: string,
    description: string;
}
export  interface ProductAdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    advantagesContent: Advantages[];

}