import {FC} from "react";
import styles from "./productInfo.module.scss";
import {ProductInfoProps} from "./productInfo.props";
import Image from "next/image";
import CourseIcon from "./icons/course-icon.png";
import {Htag} from "@/app/components/ui/htag/Htag";
import WinnerIcon from "./icons/winner-icon.svg";
import {Tag} from "@/app/components/ui/tag/Tag";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import {RatingItem} from "@/app/components/ui/rating/Rating";
import {Buttons} from "@/app/components/ui/buttons/Buttons";

export const ProductInfo: FC<ProductInfoProps> = ({
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
                                                      warranty,
                                                  }: ProductInfoProps): JSX.Element => {
    return (
        <section className={styles.info}>
            <div className={styles.info__top}>
                <div className={styles.info__top_right}>
                    <Image src={CourseIcon} alt={"icon"}/>
                    <div className={styles.info__top_box}>
                        <div className={styles.info__top_box_icons}>
                            <Htag tagType={"h1"}>{children}</Htag>
                            <Image src={WinnerIcon} alt={"winner-icon"}></Image>
                        </div>
                        <div className={styles.info__top_box_names}>
                            <Tag variant={"white"}>{categoryCourse}</Tag>
                            <Tag variant={"white"}>{categoryCourseName}</Tag>
                        </div>
                    </div>
                </div>
                <ul className={styles.info__top_left}>
                    <li className={styles.info__top_left_item}>
						<span className={styles.info__top_left_item_spn}>
							<Tag variant={"green"}>-10 000 ₽</Tag>
						</span>
                        <Ptag type={"medium"}>{price} ₽</Ptag>
                        <Ptag type={"small"}>цена</Ptag>
                    </li>
                    <li className={styles.info__top_left_item}>
                        <Ptag type={"medium"}>{credit} ₽/мес</Ptag>
                        <Ptag type={"small"}>в кредит</Ptag>
                    </li>
                    <li className={styles.info__top_left_item}>
                        <RatingItem rating={3} isEditable={true}></RatingItem>
                        <Ptag type={"small"}>{reviews} отзывов</Ptag>
                    </li>
                </ul>
            </div>
            <div className={styles.info__descr}>
                <Ptag type={"small"}>{descr}</Ptag>
            </div>
            <div className={styles.info__characteristics}>
                <div className={styles.info__characteristics_left}>
                    <ul className={styles.info__characteristics_list}>
                        <li className={styles.info__characteristics_list_item}>
                            <Ptag type={"bold_small"}>
                                Документ об окончании
                            </Ptag>
                            <span
                                className={
                                    styles.info__characteristics_list_item_spn
                                }
                            ></span>
                            <Ptag type="small">{completionDocument}</Ptag>
                        </li>
                        <li className={styles.info__characteristics_list_item}>
                            <Ptag type={"bold_small"}>Сложность</Ptag>
                            <span
                                className={
                                    styles.info__characteristics_list_item_spn
                                }
                            ></span>
                            <Ptag type="small">{complexity}</Ptag>
                        </li>
                        <li className={styles.info__characteristics_list_item}>
                            <Ptag type={"bold_small"}>Длительность</Ptag>
                            <span
                                className={
                                    styles.info__characteristics_list_item_spn
                                }
                            ></span>
                            <Ptag type="small">{duration}</Ptag>
                        </li>
                    </ul>
                    <div className={styles.info__characteristics_box}><Tag
                        variant="white">{warranty ? "Гарантия трудоустройства" : "Нет гарантии"}</Tag>
					</div>
                </div>

                <div className={styles.info__characteristics_right}>
                    <div className={styles.info__characteristics_right_adv}>
                        <Ptag type="bold_small">Преимущества</Ptag>
						<Ptag type={"small"}>{advantages}</Ptag>
                    </div>
                    <div className={styles.info__characteristics_right_neg}>
                        <Ptag type="bold_small">Недостатки</Ptag>
						<Ptag type={"small"}>{disadvantages}</Ptag>
                    </div>
                </div>
            </div>
            <div className={styles.info__bottom}>
				<Buttons appearance={"active"}>Узнать подробнее</Buttons>
				<Buttons appearance={"ghost"}>Читать отзывы</Buttons>
			</div>
        </section>
    );
};
