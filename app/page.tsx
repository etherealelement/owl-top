"use client";
import {Metadata} from "next";
import {Body} from "@/app/components/Body/Body";
import {Footer} from "@/app/components/footer/Footer";
import {Aside} from "@/app/components/aside/Aside";
import styles from "./page.module.scss";
import { MenuContext } from "./context/menuContext";
import { getMenu } from "./API/menu";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная",
    };
}




export default async function Home() {
    const menu = await getMenu(0);

    return (
        <MenuContext.Provider value={menu}>
            <div className={styles.wrapper}>
            <Body counter={10} className={styles.wrapper__body}>Курсы по Photoshop</Body>
            <Aside className={styles.wrapper__aside}></Aside>
            <div className={styles.wrapper__header}>hello</div>
            <Footer className={styles.wrapper__footer} privacyPolicy={"Политика конфиденциальности"} rightsReserved={"OwlTop © 2020 - 2021 Все права защищены"}
                    userAgreement={"Пользовательское соглашение"}></Footer>
        </div>
        </MenuContext.Provider>
    );
}
