import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    privacyPolicy: string;
    userAgreement: string;
    rightsReserved: string;
}