
import {Metadata} from "next";
import {Htag} from "@/app/components/ui/htag/Htag";

export async function generateMetadata():Promise<Metadata> {
  return {
    title: "Главная",
  }
}

export default function Home() {
  return (
    <>
    <Htag tagType={"h1"}>Er</Htag>
    </>
  )
}
