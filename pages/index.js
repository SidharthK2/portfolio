import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Pages from "../components/Pages";
import HomePage from "./HomePage";
import AboutPage from "./About";
import ProjectsPage from "./Projects";
import ContactPage from "./Contact";

export default function Home() {
  return (
    <div className="container flex">
      <Head>
        <title>Sidharth&apos;s Portfolio</title>
        <meta name="description" content="personal blockchain portfolio" />
        <link rel="icon" href="/bolt.svg" />
      </Head>
      <SideBar />
      <Pages>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </Pages>
    </div>
  );
}
