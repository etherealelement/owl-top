"use client";
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/app/interfaces/menu.interface";
import { FC, useEffect, useState } from "react";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./Menu.module.scss";
import { getMenu } from "@/app/API/menu";
import Link from "next/link";


const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: "courses",
		name: "Курсы",
		icon: <Image src={CoursesIcon} alt="courses"></Image>,
		id: 0,
	},
	{
		route: "services",
		name: "Сервисы",
		icon: <Image src={ServicesIcon} alt="courses"></Image>,
		id: 1,
	},
	{
		route: "books",
		name: "Книги",
		icon: <Image src={BooksIcon} alt="courses"></Image>,
		id: 2,
	},
	{
		route: "products",
		name: "Товары",
		icon: <Image src={ProductsIcon} alt="courses"></Image>,
		id: 3,
	},
];

export const Menu: FC = () => {
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [isId, setIsId] = useState<null | number>(null);
    const [secondId, setSecondId] = useState<null | number>(null);
    const [openedMenu, setOpenedMenu] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false);


	useEffect(() => {
		const getData = async () => {
			const res = await getMenu(0);
			setMenu(res);
		};
		getData();
	}, []);

	// console.log(menu);

	const menuPages = menu.map((item) => item.pages);
	console.log(menuPages);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((item, index) => (
					<div key={index}>
						<div>
							<div
								onClick={() => 
                                    {
                                        setOpenedMenu(!openedMenu);
                                        setIsId(() => index);
                                    }
                                }
								className={styles.menu__firstLevel}
							>
								{item.icon}
								<span className={styles.menu__firstLevel_spn}>
									{item.name}
								</span>
							</div>
						</div>
						{item.id === isId && openedMenu ?  buildSecondLevel(item) : null}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.menu__secondCategory}>
				{menu.map((item, index) => (
					<div key={index} onClick={() => {
                        setOpened(!opened);
                        setSecondId(() => index);
                    }}>
						<div key={index} className={styles.menu__secondCategory_item}>
							{item._id.secondCategory}
						</div>

                        { index === secondId && opened ? buildThirdLevel(item.pages, menuItem.route) : null}
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
		return (
			<div className={styles.menu__thirdlevel}>
				{pages.map((item, index) => <Link 
                href={`/${route}`}
                key={index}
                className={styles.menu__thirdlevel_item}
                >{item.category}</Link>)}
			</div>
		);
	};



	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
