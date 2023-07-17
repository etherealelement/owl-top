
import {Metadata} from "next";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Buttons} from "@/app/components/ui/buttons/Buttons";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import {Tag} from "@/app/components/ui/tag/Tag";
import {RatingItem} from "@/app/components/ui/rating/Rating";
import {Header} from "@/app/components/Body/Body";

export async function generateMetadata():Promise<Metadata> {
    return {
        title: "Главная",
    }
}

export default function Home() {
    return (
        <>
            <Header counter={10} >Курсы по Photoshop</Header>
        </>
    )
}
