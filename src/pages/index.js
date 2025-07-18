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
          <Image
          // Adicione props necessários aqui
          />
          <ul>
            <li>
              <a href="/login">login</a>
            </li>
            <li>
              <a href="/register">register</a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
