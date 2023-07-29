import { FC } from 'react';
import styles from "./Body.module.scss";
import {BodyProps} from "@/app/components/Body/Body.props";
import { ProductHeading } from '../productsContent/productHeading/productHeading';
import {ProductInfo} from "@/app/components/productsContent/productInfo/productInfo";

export const Body: FC<BodyProps> = ({children, counter, ...props}:BodyProps):JSX.Element => {
    


    return <header className={styles.header} {...props}>
            <ProductHeading title={"Курсы по фотошоп"} coursesCount={10}></ProductHeading>
            <ProductInfo
            advantages={"Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала"}
            categoryCourse={"Photoshop"}
            categoryCourseName={"Дизайн"}
            completionDocument={"Диплом"}
            complexity={"Начальная"}
            credit={5000}
            descr={"Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle."}
            disadvantages={"Некоторое темы раскрыты не до конца"}
            duration={"5 месяцев"}
            price={24000}
            reviews={20}
            warranty={true}
            >Профессия дизайнер от 0 до PRO</ProductInfo>
    </header>;
};