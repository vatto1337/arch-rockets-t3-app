import Link from "next/link";
import React from "react";

const HeadingArea = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-4xl">
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Discover the Amazing SpaceX Rockets
          </h1>
          <div className="mt-3 font-light leading-normal  text-gray-600 lg:text-xl">
            Explore the incredible engineering and innovation behind
            SpaceX&apos;s fleet of rockets. Click on each rocket to learn more
            about its unique features, mission history, and technological
            advancements that are pushing the boundaries of space exploration.
          </div>
          <Link href="https://www.spacex.com/">
            <button className="border-black-900 text-grey-400 mt-6 rounded-lg border-2 px-8 py-3 font-semibold">
              Read More About SpaceX
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeadingArea;
