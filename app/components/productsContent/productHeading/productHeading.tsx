import { FC } from "react";
import styles from "./productHeading.module.scss";
import { Htag, Ptag, Tag } from "../../export";
import { ProductHeadingProps } from "./productHeading.props";

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
				<div className={styles.heading__rating_box}>
					<svg
						width="20"
						height="13"
						viewBox="0 0 20 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="20" height="3" rx="1.5" fill="#7653FC" />
						<rect
							y="5"
							width="14"
							height="3"
							rx="1.5"
							fill="#7653FC"
						/>
						<rect
							y="10"
							width="8"
							height="3"
							rx="1.5"
							fill="#7653FC"
						/>

					</svg>
					<Ptag type="bold_small">По рейтингу</Ptag>
				</div>
				<Ptag type="bold_small">По цене</Ptag>
			</div>
		</div>
	);
};
