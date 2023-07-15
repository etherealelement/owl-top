import { FC } from 'react';
import styles from "./Tag.module.scss";
import cn from "classnames";
import {TagProps} from "@/app/components/ui/tag/Tag.props";
export const Tag: FC<TagProps> = ({children, variant}: TagProps): JSX.Element => {
    return <span className={cn(styles.tag, {
        [styles.tag__red]: variant === "red",
        [styles.tag__violet]: variant === "violet",
        [styles.tag__green]: variant === "green",
        [styles.tag__ghost]: variant === "ghost"
    })}>{children}</span>;
};