import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
      </Head>

      <main className="w-2/3 mx-auto py-8 flex flex-col gap-12 min-h-screen">
        <nav>
          <div className="text-2xl">Prateek Soni</div>
        </nav>

        <header className="flex-1 flex flex-col gap-4 items-center justify-center">
          <p className="uppercase text-primary tracking-widest text-xl font-light">
            Full Stack Developer
          </p>
          <h1 className="text-7xl text-center font-bold">
            I create unique experiences for everyone.
          </h1>

          <button className="mt-8 text-xl bg-primary py-3 px-6 text-black font-bold rounded-md">
            See my work
          </button>

          <div className="mt-12 border-2 border-primary p-2 rounded-full h-20">
            <div className="bg-primary w-6 h-6 rounded-full hover:translate-y-8 transition-all duration-200 cursor-pointer"></div>
          </div>
        </header>
      </main>
    </>
  );
}
