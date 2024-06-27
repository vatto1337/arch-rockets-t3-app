import React from "react";
import Link from "next/link";

const Component = () => {
  return (
    <footer className="inline-flex w-full items-center justify-center p-8">
      <p className="text-center text-sm font-medium">
        This website is powered by the{" "}
        <Link
          href="https://github.com/r-spacex/SpaceX-API"
          className="font-bold text-blue-500 hover:underline"
        >
          SpaceX API
        </Link>
        .
      </p>
    </footer>
  );
};

export default Component;
