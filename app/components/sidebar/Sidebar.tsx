import { FC } from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { Menu } from "../export";
import Image from "next/image";
import LogoIcon from "./icons/logo.svg";
import { TextField } from "@mui/material";
import SearchIcon from "./icons/search.svg";
export const Sidebar: FC<SidebarProps> = ({
	...props
}: SidebarProps): JSX.Element => {
	return (
		<aside className={styles.sidebar} {...props}>
			<Link href="#" className={styles.sidebar__logo}>
				<Image src={LogoIcon} alt="logo"></Image>
				<h1 className={styles.sidebar__logo_title}>OWL</h1>
				<p className={styles.sidebar__logo_sub}>top</p>
			</Link>

			<div className={styles.sidebar__box}>
				<TextField
					id="outlined-basic"
					label="Поиск..."
					variant="outlined"
					size="small"
				/>
			</div>

			<Menu></Menu>
		</aside>
	);
};
