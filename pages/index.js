import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import Pages from "../components/Pages";

export default function Home() {
  return (
    <div className="container flex">
      <Head>
        <title>Sidharth&apos;s Portfolio</title>
        <meta name="description" content="personal blockchain portfolio" />
        <link rel="icon" href="/eth.svg" />
      </Head>
      <SideBar />
    </div>
  );
}
