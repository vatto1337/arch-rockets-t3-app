import React from "react";
import { api } from "@/trpc/server";

// Components
import HeadingArea from "./components/headingArea";
import Entries from "./components/entries";
import Entry from "./components/entry";

const Homepage = async () => {
  // Getting the data from the API.
  const data = await api.rockets.getRockets();

  return (
    <React.Fragment>
      <HeadingArea />
      <Entries>
        {data.map((entry, ix: number) => (
          <Entry key={ix} data={entry} />
        ))}
      </Entries>
    </React.Fragment>
  );
};

export default Homepage;
