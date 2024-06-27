import React from "react";
import Link from "next/link";
import moment from "moment";

// Types definitions
import { Rocket } from "@/server/api/routers/types";

const Entry = (props: Props) => {
  return (
    <div className="component-entry hover:cursor-pointer">
      <Link
        href={`/rocket/${props.data.id}`}
        className="content flex flex-wrap items-center rounded-md bg-white p-6 py-8 text-black"
      >
        <div className="flex flex-1 flex-col content-center">
          <h4 className="text-2xl font-bold leading-tight tracking-tight">
            {props.data.name}
          </h4>
          <div className="text-zinc-500">
            First flight:{" "}
            {moment(props.data.first_flight).format("MMMM DD, YYYY")}
          </div>

          <div className="country mb-3 mt-3">
            <div className="inline-block rounded-md bg-sky-100 px-3 py-2 text-center text-xs font-semibold uppercase text-blue-500">
              {props.data.country}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center md:ml-12 md:w-auto">
          <img
            src={props.data.flickr_images[0]}
            alt="Image"
            className="h-[160px] w-[160px] rounded-full object-cover object-center"
          />
        </div>
      </Link>
    </div>
  );
};

type Props = {
  data: Rocket;
};

export default Entry;
