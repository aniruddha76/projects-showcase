'use client'
import Image from "next/image";
import Link
 from "next/link";
export default function Button(
    items: {
        github: string;
    }
) {
    return (
        <Link href={items.github} target="_blank">
            <button className="bg-slate-800 no-underline group h-12 cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px leading-6 text-slate-400 inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center h-11 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <Image height={30} width={30} className="rounded-full" alt="github" src={'https://avatars.githubusercontent.com/u/109715980?v=4'} />
                    <span>
                        Check out my Github
                    </span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
        </Link>
    )
}