import { FC } from 'react';
import styles from "./Ptag.module.scss";
import {PtagProps} from "@/app/components/ui/ptag/Ptag.props";
import cn from "classnames";

export const Ptag: FC<PtagProps> = ({type, children}: PtagProps ): JSX.Element => {
    return <>
        <p className={cn(styles.paragraph, {
            [styles.paragraph__big]: type === "big",
            [styles.paragraph__medium]: type === "medium",
            [styles.paragraph__small]: type === "small",
            [styles.paragraph__bold]: type === "bold",
            [styles.paragraph__bold_small]: type === "bold_small",
        })}>{children}</p>
    </>;
};