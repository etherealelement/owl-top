import { FC } from 'react';
import styles from "./ProductVacancy.module.scss";
import {ProductVacancyProps} from "@/app/components/productsContent/productVacancy/ProductVacancy.props";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Tag} from "@/app/components/ui/tag/Tag";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import StarActiveIcon from "./icons/starActive.svg";
import StarDisableIcon from "./icons/starDisable.svg";
import Image from "next/image";
export const ProductVacancy: FC<ProductVacancyProps> = ({vacancyEasy, vacancyHard,vacancyMiddle,vacancyName, vacancyTotal}: ProductVacancyProps): JSX.Element => {
    return <div className={styles.vacancy}>
        <div className={styles.vacancy__title}>
            <Htag tagType={"h2"}>Вакансии - {vacancyName}</Htag>
            <Tag variant={"red"}>hh.ru</Tag>
        </div>

        <div className={styles.vacancy__box}>
            <div className={styles.vacancy__box_total}>
                <Ptag type={"small"}>Всего вакансий</Ptag>
                <p className={styles.vacancy__box_total_text}>{vacancyTotal}</p>
            </div>

            <ul className={styles.vacancy__box_list}>
                <li className={styles.vacancy__box_list_item}>
                    <Ptag type={"small"}>Начальный</Ptag>
                    <Ptag type={"bold_small"}>{vacancyEasy} ₽</Ptag>
                    <div className={styles.vacancy__box_list_item_stars}>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                        <Image src={StarDisableIcon} alt={"icon"}></Image>
                        <Image src={StarDisableIcon} alt={"icon"}></Image>
                    </div>
                </li>
                <li className={styles.vacancy__box_list_item}>
                    <Ptag type={"small"}>Средний</Ptag>
                    <Ptag type={"bold_small"}>{vacancyMiddle} ₽</Ptag>
                    <div className={styles.vacancy__box_list_item_stars}>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                        <Image src={StarDisableIcon} alt={"icon"}></Image>
                    </div>
                </li>
                <li className={styles.vacancy__box_list_item}>
                    <Ptag type={"small"}>Сложный</Ptag>
                    <Ptag type={"bold_small"}>{vacancyHard} ₽</Ptag>
                    <div className={styles.vacancy__box_list_item_stars}>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                        <Image src={StarActiveIcon} alt={"icon"}></Image>
                    </div>
                </li>
            </ul>

        </div>

    </div>;
};