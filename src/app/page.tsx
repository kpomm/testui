"use client"
// import Image from "next/image";
// import { useEffect } from "react";

// export default function Home() {
  
//   // return (
//   //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
//   //     <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//   //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//   //         Get started by slowly editing&nbsp;
//   //         <code className="font-mono font-bold">src/app/page.tsx</code>
//   //       </p>
//   //       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//   //         <a
//   //           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//   //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //           target="_blank"
//   //           rel="noopener noreferrer"
//   //         >
//   //           By{" "}
//   //           <Image
//   //             src="/vercel.svg"
//   //             alt="Vercel Logo"
//   //             className="dark:invert"
//   //             width={100}
//   //             height={24}
//   //             priority
//   //           />
//   //         </a>
//   //       </div>
//   //     </div>

//   //     <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//   //       <Image
//   //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//   //         src="/next.svg"
//   //         alt="Next.js Logo"
//   //         width={180}
//   //         height={37}
//   //         priority
//   //       />
//   //     </div>

//   //     <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//   //       <a
//   //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <h2 className="mb-3 text-2xl font-semibold">
//   //           Docs{" "}
//   //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //             -&gt;
//   //           </span>
//   //         </h2>
//   //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
//   //           Find in-depth information about Next.js features and API.
//   //         </p>
//   //       </a>

//   //       <a
//   //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <h2 className="mb-3 text-2xl font-semibold">
//   //           Learn{" "}
//   //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //             -&gt;
//   //           </span>
//   //         </h2>
//   //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
//   //           Learn about Next.js in an interactive course with&nbsp;quizzes!
//   //         </p>
//   //       </a>

//   //       <a
//   //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <h2 className="mb-3 text-2xl font-semibold">
//   //           Templates{" "}
//   //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //             -&gt;
//   //           </span>
//   //         </h2>
//   //         <p className="m-0 max-w-[30ch] text-sm opacity-50">
//   //           Explore starter templates for Next.js.
//   //         </p>
//   //       </a>

//   //       <a
//   //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//   //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <h2 className="mb-3 text-2xl font-semibold">
//   //           Deploy{" "}
//   //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//   //             -&gt;
//   //           </span>
//   //         </h2>
//   //         <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//   //           Instantly deploy your Next.js site to a shareable URL with Vercel.
//   //         </p>
//   //       </a>
//   //     </div>
//   //   </main>
    
//   // );
//   return (
//     <main className="bg-white min-h-screen flex flex-col p-10">
//       <p className="text-blue-400">Hello World.</p>
//       <p className="text-blue-600">This is my fun little website. Welcome!</p>
//     </main>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#001d3d",
        },
      },
      fpsLimit: 160,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            // mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#06d6a0",
        },
        links: {
          color: "#06d6a0",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
    );
  }

  return <></>;
};
