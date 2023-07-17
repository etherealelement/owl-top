import {FC} from 'react';
import styles from "./Footer.module.scss";
import {FooterProps} from "@/app/components/footer/Footer.props";
import Link from "next/link";

export const Footer: FC<FooterProps> = ({
                                            privacyPolicy,
                                            userAgreement,
                                            rightsReserved,
                                            ...props
                                        }: FooterProps): JSX.Element => {
    return <footer {...props}>
            <div className={styles.footer}>
                <div className="container">
                <div className={styles.footer__inner}>
                    <Link href="#" className={styles.footer__text}>
                        {rightsReserved}
                    </Link>

                    <div className={styles.footer__box}>
                        <Link href="#">
                            {userAgreement}
                        </Link>
                        <Link href="#">
                            {privacyPolicy}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};