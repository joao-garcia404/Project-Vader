import Head from "next/head";

import { Header } from "../components/Header";
import { HomePersonal } from "../components/Home/Personal";
import { HomeAbout } from "../components/Home/About";
import { Cards } from "../components/Home/Cards";
import { Services } from "../components/Home/Services";
import { Knowledge } from "../components/Knowledge";
import { Projects } from "../components/Projects";


export default function Home() {
  return (
    <>
      <Head>
        <title>João Vitor Garcia</title>
      </Head>
      <Header />
      <HomePersonal />
      <HomeAbout />
      <Cards />
      <Services />
      <Knowledge />
      <Projects />
    </>
  );
};
