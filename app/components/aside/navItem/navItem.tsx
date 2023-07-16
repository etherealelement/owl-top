"use client";
import {FC, useState} from 'react';
import styles from "./navItem.module.scss";


const courseData: string[] = ['Photoshop', 'AfterEffect', 'Illustrator', 'Figma'];
export const NavItem: FC = () => {
    const [visibleDesign, setvisibleDesign] = useState<boolean>(false)
    const [visibleDev, setvisibleDev] = useState<boolean>(false)
    const [visibleAnalystick, setvisibleAnalystick] = useState<boolean>(false)
    return <>
        <li className={styles.nav__item}>
            <div className={styles.nav__item_container}>
                <span className={styles.nav__item_container_spn}></span>
                <h3 className={styles.nav__item_container_title}>Курсы</h3>
            </div>

            <div className={styles.nav__item_list}>
                <ul className={styles.nav__item_list_courses}>
                    <h3 onClick={() => setvisibleDesign(!visibleDesign)}>ДИЗАЙН</h3>
                    {visibleDesign ? courseData.map((item, index) =>
                      <li key={index}>{item}</li>
                    ) : null}
                </ul>
                <ul className={styles.nav__item_list_courses}>
                    <h3 onClick={() => setvisibleDev(!visibleDev)}>РАЗРАБОТКА</h3>
                    {visibleDev ? courseData.map((item, index) =>
                        <li key={index}>{item}</li>
                    ) : null}
                </ul>
                <ul className={styles.nav__item_list_courses}>
                    <h3 onClick={() => setvisibleAnalystick(!visibleAnalystick)}>АНАЛИТИКА</h3>
                    {visibleAnalystick ? courseData.map((item, index) =>
                        <li key={index}>{item}</li>
                    ) : null}
                </ul>
            </div>
        </li>
    </>;
};