import {DetailedHTMLProps, HTMLAttributes} from "react";


export type TSkills  = {
    id: number;
    skillName: string;
}
export interface ProductsSkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    skills: TSkills[];
}