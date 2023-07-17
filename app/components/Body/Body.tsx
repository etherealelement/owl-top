import { FC } from 'react';
import styles from "./Body.module.scss";
import {BodyProps} from "@/app/components/Body/Body.props";
import {Tag} from "@/app/components/ui/tag/Tag";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Ptag} from "@/app/components/ui/ptag/Ptag";

export const Body: FC<BodyProps> = ({children, counter, ...props}:BodyProps):JSX.Element => {
    return <header className={styles.header} {...props}>
       <div className="container">
           <div className={styles.header__inner}>
               <div className={styles.header__heading}>
                   <Htag tagType={"h1"}>{children}</Htag>
                   <Tag variant={"ghost"}>{counter}</Tag>
               </div>

               <div className={styles.header__sort}>
                   <div className={styles.header__sort_rating}>
                       <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="20" height="3" rx="1.5" fill="#7653FC"/>
                           <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC"/>
                           <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC"/>
                       </svg>
                       <Ptag type={"bold_small"}>Рейтингу</Ptag>
                   </div>

                   <div className={styles.header__sort_price}>
                       <Ptag type={"bold_small"}>Цене</Ptag>
                   </div>
               </div>
           </div>
       </div>
    </header>;
};