import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex">
      <Head>
        <title>Sidharth&apos;s Portfolio</title>
        <meta name="description" content="personal blockchain portfolio" />
        <link rel="icon" href="/eth.svg" />
      </Head>
      <nav className="flex flex-col gap-4 bg-gray-600 w-20 h-screen p-1 fixed">
        <div className="w-14 h-14 rounded-full bg-gray-400 flex justify-center items-center">
          Home
        </div>
        <div className="">About</div>
        <div className="">Stuff</div>
      </nav>
      <div className="pages ml-20 h-screen">
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
