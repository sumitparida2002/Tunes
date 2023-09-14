// components/Layout/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { log } from "console";

const MusicPlayer = (props: any) => {
  const [playing, setPlaying] = useState(false);
  const [seek, setSeek] = useState(0);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  console.log(currTime);

  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/song.mp3"],
    });

    console.log("Unmount");
    return () => {
      soundRef.current = null;
      console.log("Mount");
    };
  }, []);

  const handlePlay = () => {
    if (soundRef.current) {
      let interval = null;
      if (playing) {
        interval = setInterval(() => {
          setSeek(soundRef.current.seek()); // setting the seconds state with the current state
          const min = String(Math.floor(soundRef.current.seek() / 60));
          const sec = String(Math.floor(soundRef.current.seek() % 60));
          setCurrTime({
            min,
            sec,
          });
        }, 1000);
        soundRef.current.pause();
        setPlaying(false);
      } else {
        soundRef.current.play();
        if (interval) {
          clearInterval(interval);
        }

        setPlaying(true);
      }
    }
  };

  // const duration =
  //   Math.floor(soundRef.current?.duration / 60) +
  //   ":" +
  //   Math.trunc(soundRef.current?.duration % 60);

  return (
    <>
      <div className="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800 transition-all duration-500 dark:border-slate-500 border-b rounded-t-xl px-4 py-2 ">
        <div className="flex justify-center items-center w-[100%]">
          <div className="flex  space-x-4 h-[64px]">
            <img
              src="https://tailwindcss.com/_next/static/media/full-stack-radio.afb14e4e.png"
              loading="lazy"
              decoding="async"
              alt=""
              className="flex-none rounded-lg bg-slate-100"
              width="64px"
            />
            <div className="min-w-0 flex-auto space-y-1 font-semibold">
              <h2 className="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate">
                Scaling CSS at Heroku with Utility Classes
              </h2>
              <p className="text-slate-900 transition-all duration-500 dark:text-slate-50 text-lg">
                Full Stack Radio
              </p>
            </div>
          </div>
          <div className="space-y-2 w-[100%]">
            <div>
              <div className=" text-slate-500 transition-all duration-500 w-[90%] mx-auto transition-all duration-500 dark:text-slate-200 rounded-b-xl flex items-center">
                <div className="flex-auto flex items-center justify-evenly">
                  <button type="button" aria-label="Add to favorites">
                    <svg width="20" height="20">
                      <path
                        d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hidden sm:block lg:hidden xl:block"
                    aria-label="Previous"
                  >
                    <svg width="20" height="20" fill="none">
                      <path
                        d="m10 12 8-6v12l-8-6Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6 6v12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button type="button" aria-label="Rewind 10 seconds">
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M5 5v3.111c0 .491.398.889.889.889H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                {playing ? (
                  <button
                    type="button"
                    className="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto rounded-fullshadow-md flex items-center justify-center"
                    aria-label="Pause"
                    onClick={handlePlay}
                  >
                    <svg width="24" height="24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                      <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    aria-label="Play"
                    onClick={handlePlay}
                    className="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto rounded-fullshadow-md flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      className="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </button>
                )}

                <div className="flex-auto flex items-center justify-evenly">
                  <button
                    type="button"
                    aria-label="Skip 10 seconds"
                    className=""
                  >
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hidden sm:block lg:hidden xl:block"
                    aria-label="Next"
                  >
                    <svg width="20" height="20" fill="none">
                      <path
                        d="M14 12 6 6v12l8-6Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M18 6v12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 transition-all duration-500 dark:ring-0 transition-all duration-500 dark:bg-slate-500"
                  >
                    1x
                  </button>
                </div>
              </div>

              <div
                className=" flex justify-center items-center space-x-2 mt-2
              "
              >
                <div className="text-cyan-500 transition-all duration-500 dark:text-slate-100">
                  {Math.floor(seek / 60) ? Math.floor(seek / 60) : "00"}:
                  {Math.trunc(seek % 60) ? Math.trunc(seek % 60) : "00"}
                </div>
                <div className="relative w-[80%]">
                  <div className="transition-all duration-500 dark:bg-slate-700  rounded-full  overflow-hidden">
                    <input
                      type="range"
                      step="00.1"
                      className="w-[100%] bg-slate-100"
                      onClick={(e) => {
                        setSeek(0);
                      }}
                      onChange={() => {
                        setSeek((e) => {
                          // console.log(e.tar);
                          return 2;
                        });
                      }}
                      value={seek}
                    />
                  </div>
                </div>
                <div className="text-slate-500 transition-all duration-500 dark:text-slate-400">
                  {/* {duration} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

// pageX:446
// pageX:1356
