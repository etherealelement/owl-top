"use client"
import {FC} from 'react';
import {SortEnum, SortProps} from "@/app/components/Sort/Sort.props";
import cn from "classnames";
import styles from "./Sort.module.scss";
import SortIcon from "./icons/sort-icon.svg";
import Image from "next/image";
import {Ptag} from "@/app/components/ui/ptag/Ptag";

export const Sort: FC<SortProps> = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {

    return <div className={cn(styles.sort, className, {})} {...props}>
        <span
            // onClick={() => setSort(SortEnum.Rating)}
            className={cn({
                [styles.sort__active]: sort === SortEnum.Rating,

            })}
        >
            <div className={styles.sort__box}
            >
             <div className={cn(styles.sort__box_dis, {
                 [styles.sort__box_active]: sort === SortEnum.Rating
             })}>
                 <Image src={SortIcon} alt={"icon"}></Image>
             </div>
                {sort === SortEnum.Rating ? <Ptag type={"bold_small_sort"}>По рейтингу</Ptag> : <Ptag type={"bold_small"}>По рейтингу</Ptag>}
            </div>
        </span>

        <span
            // onClick={() => setSort(SortEnum.Rating)}
            className={cn({
                [styles.sort__active]: sort === SortEnum.Price,

            })}
        >
            <div className={styles.sort__box}
                 >
                 <div className={cn(styles.sort__box_dis, {
                     [styles.sort__box_active]: sort === SortEnum.Price
                 })}>
                 <Image src={SortIcon} alt={"icon"}></Image>
             </div>
                {sort === SortEnum.Price ? <Ptag type={"bold_small_sort"}>По рейтингу</Ptag> : <Ptag type={"bold_small"}>По рейтингу</Ptag>}
            </div>
        </span>


    </div>;
};