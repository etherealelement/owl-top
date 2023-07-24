import { Metadata } from 'next';


export const metadata:Metadata = {
    title: "Product"
};


export default function Product({params} : {params: {alias: string}}):JSX.Element {
    return <div> Страница с {params.alias}</div>;
}