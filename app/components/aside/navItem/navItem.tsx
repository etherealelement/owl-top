"use client";
import {FC, useState} from 'react';
import styles from "./navItem.module.scss";
import {NavItemProps} from "@/app/components/aside/navItem/navItem.props";
import cn from "classnames";
import Link from "next/link";

const courseData: string[] = ['Photoshop', 'AfterEffect', 'Illustrator', 'Figma'];
export const NavItem: FC<NavItemProps> = ({courseName}:NavItemProps):JSX.Element => {


    const [visibleDesign, setVisibleDesign] = useState<boolean>(false)
    const [visibleDev, setVisibleDev] = useState<boolean>(false)
    const [visibleAnalytics, setVisibleAnalytics] = useState<boolean>(false)
    const [visiblePopup, setVisiblePopup] = useState<boolean>(true);

    const listItem:JSX.Element = ( <div className={styles.nav__item_list}>
        <ul className={styles.nav__item_list_courses}>
            <h3 onClick={() => setVisibleDesign(!visibleDesign)}>ДИЗАЙН</h3>
            {visibleDesign ? courseData.map((item, index) =>
                <li key={index}>{item}</li>
            ) : null}
        </ul>
        <ul className={styles.nav__item_list_courses}>
            <h3 onClick={() => setVisibleDev(!visibleDev)}>РАЗРАБОТКА</h3>
            {visibleDev ? courseData.map((item, index) =>
                <li key={index}>{item}</li>
            ) : null}
        </ul>
        <ul className={styles.nav__item_list_courses}>
            <h3 onClick={() => setVisibleAnalytics(!visibleAnalytics)}>АНАЛИТИКА</h3>
            {visibleAnalytics ? courseData.map((item, index) =>
                <li key={index}>{item}</li>
            ) : null}
        </ul>
    </div>);




    return <>
        <li className={styles.nav__item}>
            <div className={styles.nav__item_container} onClick={() => setVisiblePopup(!visiblePopup)}>
                  <span className={cn(styles.nav__item_container_spn, {
                      [styles.nav__item_container_spn_gr]: courseName === "Курсы",
                      [styles.nav__item_container_spn_serv]: courseName === "Сервисы",
                      [styles.nav__item_container_spn_book]: courseName === "Книги",
                      [styles.nav__item_container_spn_prod]: courseName === "Товары",
                  })}></span>
                  <Link href={"#"} className={styles.nav__item_container_title}>{courseName}</Link>
            </div>
            {visiblePopup && listItem}
        </li>
    </>;
};