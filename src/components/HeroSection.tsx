"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl md:text-6xl mt-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                <p className="font-medium text-neutral-500 text-sm md:text-xl">Welcome to my creative space</p>
                <p>I&apos;ve been building a lot of things</p>
            </h1>

            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <Image height={30} width={30} alt="github" src={'https://avatars.githubusercontent.com/u/109715980?v=4'} />
                <span>Check out my GitHub</span>
            </HoverBorderGradient>
        </div>
    )
}