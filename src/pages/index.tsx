import Head from "next/head";

import { Header } from "../components/Header";
import { HomePersonal } from "../components/Home/Personal";
import { HomeAbout } from "../components/Home/About";
import { Cards } from "../components/Home/Cards";
import { Services } from "../components/Home/Services";
import { Knowledge } from "../components/Knowledge";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { SocialMedias } from "../components/Footer/SocialMedias";
import { Footer } from "../components/Footer";
import { ChangeLanguage } from "../components/ChangeLanguage";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfólio | João Vitor Garcia</title>
      </Head>

      <Header />
      <HomePersonal />
      <HomeAbout />
      <Cards />
      <Services />
      <Knowledge />
      <Projects />
      <Contact />
      <SocialMedias />
      <Footer />

      <ChangeLanguage />
    </Container>
  );
}
