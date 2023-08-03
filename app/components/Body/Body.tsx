import {FC} from 'react';
import styles from "./Body.module.scss";
import {BodyProps} from "@/app/components/Body/Body.props";
import {ProductHeading} from '../productsContent/productHeading/productHeading';
import {ProductInfo} from "@/app/components/productsContent/productInfo/productInfo";
import {ProductComments} from "@/app/components/productsContent/productComments/ProductComments";
import {ProductVacancy} from "@/app/components/productsContent/productVacancy/ProductVacancy";
import {ProductAdvantages} from "@/app/components/productsContent/productAdvantages/ProductAdvantages";
import {ProductsSkills} from "@/app/components/productsContent/productsSkills/ProductsSkills";
import {TSkills} from "@/app/components/productsContent/productsSkills/ProductsSkills.props";

export const Body: FC<BodyProps> = ({children, counter, ...props}: BodyProps): JSX.Element => {
    const advantagesContent: {
        id: number;
        name: string;
        description: string;
    }[] = [{
        id: 0,
        name: "Мобильность специалиста",
        description: "Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.",
    },
        {
            id: 1,
            name: "Индивидуальный график работы",
            description: "Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.",
        },
        {
            id: 2,
            name: "Контроль дохода",
            description: "Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону."
        },
        {
            id: 3,
            name: "Выбор работы",
            description: "Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах."
        }
    ];

    const skillsData:TSkills[] = [
        {
        id: 0,
        skillName: "Работа в Photoshop"
        },
        {
            id: 1,
            skillName: "Подготовка макетов"
        },
        {
          id: 3,
          skillName: "Графический дизайн"
        },
        {
            id: 4,
            skillName: "Web дизайн"
        },
        {
            id: 5,
            skillName: "Дизайн сайтов"
        }

    ];


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
        <ProductComments
            date={"10 марта 2021"}
            userFeedback={"Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!"}
            userName={"Василий Раганов"}
            userRating={0}
        ></ProductComments>
        <ProductVacancy
            vacancyEasy={"110 000"}
            vacancyHard={"260 000"}
            vacancyMiddle={"190 000"}
            vacancyName={"Photoshop"}
            vacancyTotal={1210}
        ></ProductVacancy>
        <ProductAdvantages
            advantagesContent={advantagesContent}
        ></ProductAdvantages>
        <ProductsSkills
            skills={skillsData}
        ></ProductsSkills>
    </header>
};