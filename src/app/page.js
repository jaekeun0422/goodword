import Image from "next/image";
import Link from "next/link";
import {Control} from "@/app/control";
import {Logon} from "@/app/logon"; // log 번호 check

export default async function Home() {
  /* 시작 시 전체 읽는 것을 방지 */
  /*
  let topics = [];
  try {
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/getAll`);
    //const resp = await fetch("http://localhost:8080/api/getAll", { cache: "no-store" });
    topics = await resp.json();
    topics.sort((a, b) => b.hit - a.hit); //내림차순
  } catch (e) {
    console.error("API fetch error:", e);
  }
  */
  // morning.svg -> morning.jpg
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <a href={"/"}>
          <Image
          src="/morning.jpg"
          alt="goodword logo"
          width={350}
          height={50}
          priority
        />
        </a>
        {/*} 잠시 보류
        <Logon/>
        */}
        <Control/>
        <div className="hidden flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        {/* category 선택 후 전체 읽는 것을 방지
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-4xl">
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic, index) => (
                  <li key={`${topic.id}-${index}`} className="border rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                     <Link href={`/read/${topic.id}`}>({topic.hit}) {topic.subject}</Link>
                  </li>
              ))}
            </ol>
          </div>
        </div>
        */}
      </main>
      <footer className="hidden row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
