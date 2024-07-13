"use client";
import React from "react";
import Button from "./ui/connect-button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl md:text-6xl mt-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                <p className="font-medium text-neutral-500 text-sm md:text-xl">Welcome to my creative space</p>
                <p>I&apos;ve been building a lot of things</p>
            </h1>

            <div className="flex gap-2">
                <Button github='https://github.com/aniruddha76' />
                <Link href={'https://drive.google.com/file/d/1qMy1mdC0JKDZk_OniWd51Hu8WVgXDPl0/view?usp=sharing'} target="_blank" className="inline-flex animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <button>
                        Resume
                    </button>
                </Link>
            </div>
        </div>
    )
}