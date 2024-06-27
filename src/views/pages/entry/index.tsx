import React from "react";
import { api } from "@/trpc/server";

// Components
import ContextProvider from "./context";
import Overview from "./components/overview";
import Images from "./components/images";
import Specifications from "./components/specifications";
import Wikipedia from "./components/wikipedia";

// Types
import type { GetServerSideProps } from "next";

const EntryPage = async (props: EntryPageProps) => {
  // Getting the data from the server.
  const data = await api.rockets.getRocketInformation({
    id: props.params.id,
  });

  return (
    <ContextProvider data={data!}>
      <div className="mx-auto max-w-screen-2xl px-8 md:px-12">
        <Overview />
        <Images />
        <Specifications />
        <Wikipedia />
      </div>
    </ContextProvider>
  );
};

interface EntryPageProps extends GetServerSideProps {
  params: {
    id: string;
  };
}

export default EntryPage;
