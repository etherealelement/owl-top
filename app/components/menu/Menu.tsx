"use client";
import { FirstLevelMenuItem, MenuItem } from '@/app/interfaces/menu.interface';
import { FC, useEffect, useState } from 'react';
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from '@/app/interfaces/page.interface';
import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './Menu.module.scss';
import { getMenu } from '@/app/API/menu';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: "courses", name: "Курсы", icon: <Image src={CoursesIcon} alt='courses'></Image>, id: 0},
    {route: "services", name: "Сервисы", icon: <Image src={ServicesIcon} alt='courses'></Image>, id: 1},
    {route: "books", name: "Книги", icon: <Image src={BooksIcon} alt='courses'></Image>, id: 2},
    {route: "products", name: "Товары", icon: <Image src={ProductsIcon} alt='courses'></Image>, id: 3},
];

export const Menu: FC =  () => {
    const [menu, setMenu] =useState<MenuItem[]>([]);
    const [isId, setIsId] = useState<number>(0);



    useEffect(() => { 
        const getData = async () => {
            const res = await getMenu(0);
            setMenu(res);
        };
        getData();
    }, []);

    console.log(menu);

    
    const buildFirstLevel = () => {
        return (
            <>
            {firstLevelMenu.map((item, index) => <div key={index} >
                <div>
                    <div onClick={() => setIsId(() => index)}  className={styles.menu__firstLevel}>
                        {item.icon}
                        <span className={styles.menu__firstLevel_spn}>{item.name}</span>
                    </div>
                </div>
                {/* {opened && buildSecondLevel()} */}
                {item.id === isId && buildSecondLevel()}
            </div>)}
            </>
        );
    };

    const buildSecondLevel = () => {
        return (      
            <div className={styles.menu__secondCategory}>
             {menu.map((item, index) => <div key={index} className={styles.menu__secondCategory_item}>{item._id.secondCategory}</div>)}
            </div>         
        );
    };


    return <div className={styles.menu}>
        {buildFirstLevel()}
    </div>;
};