'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export default function Projects() {
    const projects = [
        {
          title: "Selenium Instagram Scraper",
          description: "The Selenium Instagram Scraper is a tool designed to automate the extraction of entire Instagram users' posts. Utilizing the Selenium framework, it navigates Instagram's interface to gather and download posts efficiently.",
          link: "https://github.com/aniruddha76/Selenium-instagram-scrape",
        },
        {
          title: "Music Academy",
          description: "The Music Academy project is a Next.js application aimed at learning and implementing Next.js with TypeScript. The Purpose of this project was to learn the Next.js framework",
          link: "https://github.com/aniruddha76/music-academy-nextjs",
          live: "https://music-academy-nextjs-six.vercel.app/",
        },
        {
          title: "Personal Portfolio",
          description: "The Personal Portfolio project is built using React.js and the Vite build tool, enhanced by Tailwind CSS. This portfolio showcases personal projects, skills, and experiences in a modern, responsive design.",
          link: "https://github.com/aniruddha76/aniruddha-portfolio",
          live: "https://aniruddha-thakur.vercel.app/",
        },
        {
          title: "Topfeed",
          description: "TopFeed is a Discord.js project designed to deliver images based on user requests within a Discord server. It leverages the capabilities of Discord.js to provide a seamless, interactive experience for users seeking specific images.",
          link: "https://github.com/aniruddha76/image-discord-bot",
          live: "https://discord.com/api/oauth2/authorize?client_id=1183025739474419823&permissions=8&scope=bot",
        },
        {
          title: "Vue Todo App",
          description: "The ToDo App is a project created with Vue.js to facilitate learning and mastering the Vue framework. It serves as a practical application for managing tasks, showcasing the capabilities and features of Vue in a real-world scenario.",
          link: "https://github.com/aniruddha76/simple-vue-app",
          live: "https://simple-vue-app-nine.vercel.app/",
        },
        {
          title: "Music Webapp",
          description: "The Music WebApp is a project built using HTML, CSS, and JavaScript, with a strong emphasis on design. It showcases a user-friendly interface for exploring and interacting with music content.",
          link: "https://github.com/aniruddha76/Music-Webapp",
          live: "https://aniruddha76.github.io/Music-Webapp/",
        },
        {
          title: "Quizz App",
          description: "The Quiz App is a project developed to practice and enhance skills in JavaScript and CSS. It features interactive quizzes with dynamic content, providing a hands-on approach to learning and applying web development techniques.",
          link: "https://github.com/aniruddha76/Quizz-app",
          live: "https://aniruddha76.github.io/Quizz-app/",
        },
        {
          title: "Product Landing Page",
          description: "The Product Landing Page is a front-end project aimed at creating an amazing landing page. It focuses on delivering a visually appealing and engaging interface to captivate users. This project highlights the essential skills in web design for creating pages.",
          link: "https://github.com/aniruddha76/Product-landing-page",
          live: "https://aniruddha76.github.io/Product-landing-page/",
        },
      ];
    return (
        <HoverEffect items={projects} />       
    )
}