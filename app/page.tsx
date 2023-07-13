
import {Metadata} from "next";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Buttons} from "@/app/components/ui/buttons/Buttons";
import {Ptag} from "@/app/components/ui/ptag/Ptag";

export async function generateMetadata():Promise<Metadata> {
  return {
    title: "Главная",
  }
}

export default function Home() {
  return (
    <>
    <Htag tagType={"h1"}>Er</Htag>
      <Buttons appearance={"ghost"}>Узнать подробнее</Buttons>
      <Buttons appearance={"active"}>Узнать подробнее</Buttons>
      <Ptag type={"small"}>Hello</Ptag>
    </>
  )
}
