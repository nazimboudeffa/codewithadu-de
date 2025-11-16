import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <section className="relative flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Link className="absolute mt-10 px-20 py-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
        href="https://calendar.app.google/2hRoLPEAMBY4AVSq8"
      >
        BOOK A CALL WITH ME
      </Link>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-xl mx-3 text-center">
        You can ask me wich template to use for your project. I think that 300€ is fair price for a simple landing page.
      </p>
      <p className="text-xl mx-3 text-center">
        I do not know how to evaluate time and budget, instead, <b>I prefere that you donate what you want</b>.
      </p>
      <p className="text-xl mx-3 text-center">
        Just take it easy mankind. You can also use the templates as you want.
      </p>
      <p className="text-xl mx-3 text-center">
        <Link
          href="templates"
        > 
        👉 <u>CHEK OUR TEMPLATES</u>
        </Link>
      </p>
    </section>
    <section className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-700">
      <p className="text-white text-xl mx-3 text-center">
        
        <Link
          href="https://www.linkedin.com/in/nazimboudeffa"
        > 
        👉 <u>KEEP IN TOUCH</u>
        </Link>
      </p>
    </section>
    </main>
  );
}
