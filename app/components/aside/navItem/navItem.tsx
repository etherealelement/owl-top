import {FC, useContext, useState} from 'react';
import styles from "./navItem.module.scss";
import {NavItemProps} from "@/app/components/aside/navItem/navItem.props";
import cn from "classnames";
import Link from "next/link";
import { MenuContext } from '@/app/context/menuContext';


export const NavItem: FC<NavItemProps> = ({courseName}:NavItemProps):JSX.Element => {

    // ui state changes
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleCategory, setvisibleCategory] = useState<boolean>(true);

    const handleVisibleCategory = () => {
        setvisibleCategory(() => !visibleCategory);
    };

    const handleVisible = (e:any): void => {
        console.log(e.currentTarget);
        if(e.target) {
            setVisible(() => !visible);
        }
    };

    // menuData
    const menu = useContext(MenuContext);

    const [pages] = menu;
    const pagesData = pages.pages;

    const listItem:JSX.Element = ( <div className={styles.nav__item_list}>
        {menu.map((item: any) => <ul className={styles.nav__item_list_courses}>
            <h3 onClick={handleVisible}>{item._id.secondCategory}</h3>
            {visible ? pagesData.map((item:any) =>
                <li key={item._id}>{item.category}</li>
            ) : null}
        </ul>)}
    </div>);




    return <>
        <li className={styles.nav__item}>
            <div className={styles.nav__item_container} onClick={handleVisibleCategory}>
                  <span className={cn(styles.nav__item_container_spn, {
                      [styles.nav__item_container_spn_gr]: courseName === "Курсы",
                      [styles.nav__item_container_spn_serv]: courseName === "Сервисы",
                      [styles.nav__item_container_spn_book]: courseName === "Книги",
                      [styles.nav__item_container_spn_prod]: courseName === "Товары",
                  })}></span>
                  <Link href={"#"} className={styles.nav__item_container_title}>{courseName}</Link>
            </div>
            {visibleCategory && listItem}
        </li>
    </>;
};