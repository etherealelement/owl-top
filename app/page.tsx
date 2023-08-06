 import {Metadata} from "next";
import {Body} from "@/app/components/Body/Body";
import {Footer} from "@/app/components/footer/Footer";
import styles from "./page.module.scss";
import { Sidebar } from "./components/sidebar/Sidebar";


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная",
    };
}

export default function Home() {


    return (
            <div className={styles.wrapper}>
            <Sidebar className={styles.wrapper__aside}></Sidebar>
            <Body counter={10} className={styles.wrapper__body}>Курсы по Photoshop</Body>
            <div className={styles.wrapper__header}>hello</div>
            <Footer className={styles.wrapper__footer} privacyPolicy={"Политика конфиденциальности"} rightsReserved={"OwlTop © 2020 - 2021 Все права защищены"}
                    userAgreement={"Пользовательское соглашение"}></Footer>
        </div>
    );
}
