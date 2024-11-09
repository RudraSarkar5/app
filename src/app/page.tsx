import { Metadata } from "next";

export  const metadata:Metadata = {
   title : "Home"
}

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>it is me rudra also what is goging </h1>{process.env.HOST}
      <h1>next env variable is </h1>{process.env.NAME}
    </div>
  );
}
