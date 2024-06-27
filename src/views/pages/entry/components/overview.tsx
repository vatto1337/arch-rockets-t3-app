"use client";

import React from "react";
import Image from "next/image";

// Context
import { PageContext } from "../context";
import Link from "next/link";

const Overview = () => {
  const { data } = PageContext()!;

  return (
    <React.Fragment>
      <section
        id="overview"
        className="flex flex-row items-center justify-between"
      >
        <div className="information max-w-3xl">
          <h2 className="text-6xl font-bold leading-tight tracking-tight">
            {data.name}
          </h2>
          <div className="description font-light leading-normal  text-gray-600 lg:text-xl">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="ml-6">
          <img
            src={data.flickr_images[0]!}
            className="h-[500px] w-[500px] rounded-full object-cover object-center"
            alt="Picture of the Rocket"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Overview;
