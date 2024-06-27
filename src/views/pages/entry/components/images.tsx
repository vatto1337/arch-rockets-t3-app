"use client";

import React from "react";

// Context
import { PageContext } from "../context";
import Link from "next/link";

const Overview = () => {
  const { data } = PageContext()!;

  return (
    <React.Fragment>
      <section id="images" className="py-12 pb-0">
        <h1 className="text-1xl mb-1 font-bold leading-tight tracking-tight md:text-2xl">
          Images
        </h1>
        <p className="text-grey mb-8 text-gray-400">
          Visual representations of this individual rocket type used in space
          exploration.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {data.flickr_images.map((img, index) => (
            <a href={img} target="_blank" rel="noopener noreferrer" key={index}>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="h-[300px] w-full rounded-lg object-cover  object-center md:h-[500px]"
              />
            </a>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Overview;
