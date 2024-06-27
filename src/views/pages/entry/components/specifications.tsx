"use client";

import React from "react";

// Context
import { PageContext } from "../context";
import Link from "next/link";
import moment from "moment";

const Overview = () => {
  const { data } = PageContext()!;

  const getSpecifications = () => {
    return [
      {
        label: "Height",
        value: `${data.height.meters} meters`,
      },
      {
        label: "Diameter",
        value: `${data.diameter.meters} meters`,
      },
      {
        label: `Mass`,
        value: `${data.mass.kg} KG`,
      },
      {
        label: `Cost per Launch`,
        value: `${data.cost_per_launch}$`,
      },
      {
        label: `Country of Origin`,
        value: `${data.country}`,
      },
      {
        label: `First flight`,
        value: `${moment(data.first_flight).format("MMMM DD, YYYY")}`,
      },
    ];
  };
  return (
    <React.Fragment>
      <section id="specifications" className="py-12">
        <h1 className="text-1xl mb-1 font-bold leading-tight tracking-tight lg:text-2xl">
          Specifications
        </h1>
        <p className="mb-8 text-gray-400">
          Detailed specifications of this rocket model.
        </p>
        <div className="entries">
          {getSpecifications().map((row, index) => (
            <div
              className={`entry border-black-400 flex justify-between border-b border-solid px-4 py-5`}
              key={index}
            >
              <div className="tracking-tigh text-sm font-bold leading-tight">
                {row.label}
              </div>
              <div className="tracking-tigh text-sm leading-tight">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Overview;
