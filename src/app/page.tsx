import Image from "next/image";
import Link from "next/link";
import hero from "/public/hero.png";

export default function Home() {
  return (
    <main>
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
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
        One thing at a time !
      </Link>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>
        I do not know what to put here, but I am sure it will be great.
      </p>
      <p>
        I do not know how to evaluate time and budget, but I am sure that the problem will be solved.
      </p>
      <p>
        Just take it easy mankind.
      </p>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-700">
      <p className="text-white">
        You can subscribe to my newsletter to get the latest news.
      </p>
      <p className="text-white">
        I write in french and english.
      </p>
      <p className="text-white">
        <Link
          href="https://nazimboudeffa.substack.com"
        > 
        https://nazimboudeffa.substack.com
        </Link>
      </p>
    </section>
    </main>
  );
}
