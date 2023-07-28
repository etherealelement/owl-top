import { FC } from 'react';
import styles from "./Body.module.scss";
import {BodyProps} from "@/app/components/Body/Body.props";
import { ProductHeading } from '../productsContent/productHeading/productHeading';

export const Body: FC<BodyProps> = ({children, counter, ...props}:BodyProps):JSX.Element => {
    


    return <header className={styles.header} {...props}>
            <ProductHeading title={"Курсы по фотошоп"} coursesCount={10}></ProductHeading>
    </header>;
};