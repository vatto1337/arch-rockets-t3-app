"use client";

import React from "react";

// Context
import { PageContext } from "../context";
import Link from "next/link";

const Wikipedia = () => {
  const { data } = PageContext()!;

  return (
    <React.Fragment>
      <section
        id="wikipedia"
        className="flex flex-row items-center justify-between rounded-2xl bg-black p-16 pb-8"
      >
        <div className="information max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
            More Information
          </h2>
          <div className="font-light leading-normal text-white lg:text-xl">
            <p>
              Click the button below to visit the Wikipedia page and find out
              more about this rocket&apos;s history, engineering, and
              significant missions.
            </p>
          </div>
          <div className="more-btn">
            <Link href={data.wikipedia}>
              <button className="border-black-900 mt-6 rounded-lg border-2 px-8 py-3 font-semibold text-white">
                Go to Wikipedia
              </button>
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Wikipedia;
