"use client";
import { FC, useRef, useState } from "react";
import styles from "./Search.module.scss";
import { TextField } from "@mui/material";
import { SearchProps } from "./Search.props";
import SearchIcon from "./icons/search.svg";
import Image from "next/image";

export const Search: FC<SearchProps> = ({
	label,
	sizeInput,
}: SearchProps): JSX.Element => {
	const [valueInput, setValueInput] = useState<string>("");
	const inputRef = useRef(HTMLInputElement);

	const handleRef = () => {
		return inputRef.current;	
	};


	return (
		<>
			<div className={styles.search}>
				<span className={styles.search__span} onClick={handleRef}>
                    <Image src={SearchIcon} alt="image"></Image>
                </span>
				<TextField
					id="outlined-basic"
					label={label}
					value={valueInput}
					onChange={(e) => setValueInput(e.target.value)}
					variant="outlined"
					size={sizeInput}
				/>
			</div>
		</>
	);
};
