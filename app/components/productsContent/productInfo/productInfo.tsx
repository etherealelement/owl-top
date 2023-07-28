import { FC } from "react";
import styles from "./productInfo.module.scss";
import { ProductInfoProps } from "./productInfo.props";

export const productInfo: FC<ProductInfoProps> = ({
	advantages,
	categoryCourse,
    categoryCourseName,
    children,
    completionDocument,
    complexity,
    credit,
    descr,
    disadvantages,
    duration,
    price,
    reviews,
    warranty
}: ProductInfoProps): JSX.Element => {
	return <div className={styles.info}>
        <div className={styles.info__top}></div>
        <div className={styles.info__descr}></div>
        <div className={styles.info__characteristics}></div>
        <div className={styles.info__bottom}></div>
    </div>;
};
