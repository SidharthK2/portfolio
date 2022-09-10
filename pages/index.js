import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container flex">
      <Head>
        <title>Sidharth&apos;s Portfolio</title>
        <meta name="description" content="personal blockchain portfolio" />
        <link rel="icon" href="/eth.svg" />
      </Head>
      <SideBar />
      <div className="pages ml-16 h-screen w-screen">
        <div className="page1 flex w-screen h-screen bg-darkGray p-2 text-offWhite">
          <div className="page1body m-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            impedit!
          </div>
        </div>
        <div className="page2 w-screen h-screen bg-lightBlack p-2 text-offWhite">
          <div className="page2 body">Hello</div>
        </div>
      </div>
    </div>
  );
}
