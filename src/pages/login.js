import Card from "@/components/Card";
import LoginForm from "@/components/LoginForm";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>PERSONALIZE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <Image />
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/register">register</a>
            </li>
          </ul>
          <Card title="login" content={<LoginForm></LoginForm>}></Card>
        </main>
      </div>
    </>
  );
}
