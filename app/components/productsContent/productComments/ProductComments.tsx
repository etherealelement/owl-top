import { FC } from 'react';
import styles from "./ProductComments.module.scss";
import {ProductCommentsProps} from "@/app/components/productsContent/productComments/ProductComments.props";
import Image from "next/image";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import UserIcon from "./icons/user.svg";
import {RatingItem} from "@/app/components/ui/rating/Rating";
import {TextField} from "@mui/material";
import {Buttons} from "@/app/components/ui/buttons/Buttons";

export const ProductComments: FC<ProductCommentsProps> = ({userRating,userName,userFeedback, date}: ProductCommentsProps): JSX.Element => {
    return <div className={styles.reviews}>
            <div className={styles.reviews__heading}>
                <div className={styles.reviews__heading_user}>
                    <Image src={UserIcon} alt={"user-avatar"}></Image>
                    <Ptag type={"bold_small"}>{userName}:</Ptag>
                    <Ptag type={"small"}>Что вас ждет в этом курсе?</Ptag>
                </div>
                <div className={styles.reviews__heading_rating}>
                    <Ptag type={"small"}>{date}</Ptag>
                    <RatingItem isEditable={false} rating={userRating}></RatingItem>
                </div>
            </div>
        <div className={styles.reviews__content}>
            <Ptag type={"small"}>{userFeedback}</Ptag>
        </div>
        <div className={styles.reviews__feedback}>
            <form className={styles.reviews__feedback_form}>
                <div className={styles.reviews__feedback_form_box}>
                    <div className={styles.reviews__feedback_form_box_input}>
                        <TextField
                            id="outlined-basic"
                            label="Имя"
                            variant="outlined"
                            size={"small"}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Заголовок отзыва"
                            variant="outlined"
                            size={"small"}
                        />
                    </div>
                    <div className={styles.reviews__feedback_form_box_rating}>
                        <Ptag type={"small"}>Отзыв:</Ptag>
                        <RatingItem isEditable={true} rating={0}></RatingItem>
                    </div>
                </div>
                <TextField
                    id="outlined-basic"
                    label="Текст отзыва"
                    variant="outlined"
                    size={"small"}
                    multiline={true}
                    fullWidth={true}
                    rows={5}
                />
            </form>
        </div>
        <div className={styles.reviews__send}>
            <Buttons appearance={"active"}>Отправить</Buttons>
            <Ptag type={"small"}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</Ptag>
        </div>
    </div>;
};