import Image from 'next/image'
import {Metadata} from "next";

export async function generateMetadata():Promise<Metadata> {
  return {
    title: "Page 3",
  }
}

export default function Home() {
  return (
    <>

    </>
  )
}
