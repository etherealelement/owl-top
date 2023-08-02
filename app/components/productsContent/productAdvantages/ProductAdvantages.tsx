import { FC } from 'react';
import {ProductAdvantagesProps} from "@/app/components/productsContent/productAdvantages/ProductAdvantages.props";
import styles from "./ProductAdvantages.module.scss";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import CheckIcon from "./icons/check_icon.svg";
import Image from "next/image";
export const ProductAdvantages: FC<ProductAdvantagesProps> = ({advantagesContent}: ProductAdvantagesProps): JSX.Element => {
    return <section className={styles.advantages}>
        <Ptag type={"medium"}>Преимущества</Ptag>

        <ul className={styles.advantages__list}>
            {advantagesContent.map(item => <li
            className={styles.advantages__list_item} key={item.id}>
                <div className={styles.advantages__list_item_title}>
                    <Image src={CheckIcon} alt={"icon"}></Image>
                    <Ptag type={"bold_small"}>{item.name}</Ptag>
                </div>
                <div className={styles.advantages__list_item_descr}>
                    <Ptag type={"small"}>{item.description}</Ptag>
                </div>
            </li>)}
        </ul>
        <Ptag type={"small"}>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</Ptag>
    </section>;
};