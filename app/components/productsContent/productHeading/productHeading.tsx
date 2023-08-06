
import {FC} from "react";
import styles from "./productHeading.module.scss";
import {Htag, Tag} from "../../export";
import {ProductHeadingProps} from "./productHeading.props";
import {Sort} from "@/app/components/Sort/Sort";
import {SortEnum} from "@/app/components/Sort/Sort.props";

export const ProductHeading: FC<ProductHeadingProps> = ({
	title,
	coursesCount,
}: ProductHeadingProps): JSX.Element => {
	return (
		<div className={styles.heading}>
			<div className={styles.heading__box}>
				<Htag tagType="h1">{title}</Htag>
				<Tag variant="ghost">{coursesCount}</Tag>
			</div>
			<div className={styles.heading__rating}>
				<Sort sort={SortEnum.Price}></Sort>
			</div>
		</div>
	);
};
