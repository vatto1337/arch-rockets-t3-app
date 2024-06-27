"use client";

import React from "react";

// Context
import { PageContext } from "../context";

const Overview = () => {
  const { data } = PageContext()!;

  return (
    <React.Fragment>
      <section
        id="overview"
        className="flex flex-col items-center justify-center md:justify-between lg:flex-row"
      >
        <div className="information mb-8 mt-8 max-w-3xl md:mb-0 md:mt-0">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-6xl">
            {data.name}
          </h2>
          <div className="description font-light leading-normal  text-gray-600 lg:text-xl">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="ml-6">
          <img
            src={data.flickr_images[0]}
            className="h-[250px] w-[250px] rounded-full object-cover object-center lg:h-[500px] lg:w-[500px]"
            alt="Picture of the Rocket"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Overview;
