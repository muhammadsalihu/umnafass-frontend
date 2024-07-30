import { type NextPage } from "next";
import Head from "next/head";
// import Astronaut from "public/images/astronaut.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Main from "src/layout/Main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gifts by Umnafass</title>
        <meta name="description" content="Umnafass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-col gap-3 sm:px-4 sm:py-16">
          <div className="sm:text-[2rem] text-xl font-semibold">
            Technological Innovations for premium value in Engineering Services
          </div>
          <div className="flex flex-row gap-3 text-[1.5rem] w-full">
            <a href="https://twitter.com/umnafass" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/umnafass" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="flex flex-row w-full gap-3 text-[1.2rem]">

            <Link href={"/about"} className="underline underline-offset-8">
              About
            </Link>

            <a href={"https://musaj.substack.com"} target="_blank" className="disabled underline underline-offset-8">
              Musaj
            </a>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
