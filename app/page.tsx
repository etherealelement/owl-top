
import {Metadata} from "next";
import {Htag} from "@/app/components/ui/htag/Htag";
import {Buttons} from "@/app/components/ui/buttons/Buttons";
import {Ptag} from "@/app/components/ui/ptag/Ptag";
import {Tag} from "@/app/components/ui/tag/Tag";
import {Rating} from "@mui/material";
import {RatingItem} from "@/app/components/ui/rating/Rating";

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
      <Tag variant={"violet"}>Web дизайн</Tag>
      <RatingItem isEditable={true}></RatingItem>
    </>
  )
}
