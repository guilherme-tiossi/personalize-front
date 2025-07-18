import LongCard from "@/components/LongCard";
import UserData from "@/components/UserData";
import Head from "next/head";

export default function User() {
  return (
    <>
      <Head>
        <title>PERSONALIZE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ul>
          <li>
            <a href="/login">logout</a>
          </li>
        </ul>
        <main>
          <LongCard title="user" content={<UserData></UserData>}></LongCard>
        </main>
      </div>
    </>
  );
}
