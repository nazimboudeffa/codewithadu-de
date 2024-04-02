import Image from "next/image";
import Link from "next/link";
import hero from "/public/hero.png";

export default function Home() {
  return (
    //hero page with image and a centered button
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src={hero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Link className="absolute mt-10 px-20 py-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
        href="https://github.com/nazimboudeffa/boilerplate-influence-nextjs-mongo"
      >
        One thing at a time
      </Link>
    </div>
  );
}
