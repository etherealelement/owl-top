import {Metadata} from "next";
import {Header} from "@/app/components/header/Header";
import {Footer} from "@/app/components/footer/Footer";
import {Aside} from "@/app/components/aside/Aside";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная",
    }
}

export default function Home() {
    return (
        <>
            <Header counter={10}>Курсы по Photoshop</Header>
            <Aside></Aside>
            <Footer privacyPolicy={"Политика конфиденциальности"} rightsReserved={"OwlTop © 2020 - 2021 Все права защищены"}
                    userAgreement={"Пользовательское соглашение"}></Footer>
        </>
    )
}
