import { FC } from 'react';
import styles from "./ProductsSkills.module.scss";
import {ProductsSkillsProps} from "@/app/components/productsContent/productsSkills/ProductsSkills.props";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Tag} from "@/app/components/ui/tag/Tag";
export const ProductsSkills: FC<ProductsSkillsProps> = ({skills}: ProductsSkillsProps): JSX.Element => {
    return <section className={styles.skills}>
        <Htag tagType={"h2"}>Получаемые навыки</Htag>

        <ul className={styles.skills__list}>
            {skills.map(item => <li className={styles.skill__list_item} key={item.id}>
                <Tag variant={"violet"}>{item.skillName}</Tag>
            </li>)}
        </ul>
    </section>;
};