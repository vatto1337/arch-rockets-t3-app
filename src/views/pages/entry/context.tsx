"use client";

import React, { createContext, useContext } from "react";

import type { SharedContextType } from "./types";
import type { Rocket } from "@/server/api/routers/types";

// Context
export const Context = createContext<SharedContextType | null>(null);

const ContextProvider = (props: Props) => {
  const ContextProps = { data: props.data };

  return (
    <Context.Provider value={ContextProps}>{props.children}</Context.Provider>
  );
};

export const PageContext = () => useContext(Context);

type Props = {
  data: Rocket;
  children: React.ReactNode;
};

export default ContextProvider;
