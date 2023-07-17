import { FC } from 'react';
import styles from "./Buttons.module.scss";
import {ButtonsProps} from "@/app/components/ui/buttons/Buttons.props";
import cn from "classnames";

export const Buttons: FC<ButtonsProps> = ({appearance, children}:ButtonsProps):JSX.Element => {
    return <>
        <button className={cn(styles.button, {
            [styles.button__primary]: appearance === "active",
            [styles.button__ghost]: appearance === "ghost"
        })}>{children}</button>
    </>;
};