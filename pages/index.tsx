import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import Card from "@/components/Card";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sidharth&apos;s Portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bolt.svg" />
      </Head>
      <div id="Home" className="flex">
        <Sidebar />
        <main className="flex-grow">
          <section className="px-10 min-h-screen">
            <nav className="py-10 mb-12 flex flex-col gap-6 items-center sm:flex-row sm:justify-between">
              <h1 className="text-xl text-green-400">0x_Snake#8049</h1>
              <ul className="flex items-center">
                <li>
                  <a
                    className="bg-green-500 active:bg-green-700 hover:bg-green-600 text-gray-50 px-4 py-2 rounded-md ml-6"
                    href="#">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-offWhite text-center p-10 flex flex-col items-center">
              <h2 className="text-5xl py-2 font-medium">Sidharth Kapoor</h2>
              <h3 className="text-2xl py-2 text-green-400">
                Fullstack Web3 Developer
              </h3>
              <p className=" max-w-2xl py-5 leading-8 text-gray-300">
                Web3 developer with a passion for decentralized technology and
                its potential to bring about a fairer, more equitable world. I
                am driven to build and contribute to the web3 ecosystem through
                innovative and impactful applications.
              </p>
            </div>
            <div className="text-4xl flex mb-4 justify-center gap-12 text-offWhite">
              <a href="https://github.com/SidharthK2">
                <AiFillGithub className="hover:text-green-500" />
              </a>
              <a href="https://twitter.com/coding_sid">
                <AiFillTwitterCircle className="hover:text-green-500" />
              </a>
              <a href="https://dev.to/sidharthk2">
                <FaBlog className="hover:text-green-500" />
              </a>
            </div>
            <div className=" flex justify-center my-8">
              <Image src={"/nft.jpg"} height={200} width={200} alt="pfp" />
            </div>
          </section>

          <section id="About" className="px-4 min-h-screen">
            <div className="flex gap-4 justify-evenly flex-wrap">
              <Card
                src={"/front-end.svg"}
                title={"Frontend"}
                list={[
                  "Nextjs",
                  "React",
                  "Tailwindcss",
                  "Typescript",
                  "Redux",
                  "tRPC",
                ]}
              />
              <Card
                src={"/blockchain.svg"}
                title={"Web3"}
                list={[
                  "Solidity",
                  "Hardhat",
                  "Moralis",
                  "IPFS",
                  "TheGraph",
                  "etherjs",
                ]}
              />
              <Card
                src={"/server.svg"}
                title={"Backend"}
                list={[
                  "Nodejs",
                  "Express",
                  "MongoDB",
                  "WebScokets",
                  "GraphQL",
                  "Auth",
                ]}
              />
            </div>
          </section>
          <section id="Projects" className="px-4 min-h-screen">
            <div className="text-white">Projects</div>
          </section>
          <section id="Contact" className="px-4 min-h-screen">
            <div className="text-white">Contact form</div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
