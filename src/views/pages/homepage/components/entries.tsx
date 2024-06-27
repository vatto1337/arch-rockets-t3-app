import React from "react";

const Entries = (props: Props) => {
  return (
    <React.Fragment>
      <section
        id="rockets"
        className="mx-auto max-w-screen-2xl rounded-2xl bg-black p-16"
      >
        <h1 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-white">
          Rocket Types
        </h1>
        <p className="text-grey mb-8 text-gray-400">
          Explore different types of rockets that have revolutionized space
          exploration.
        </p>
        {/* The listings */}
        <div className="--entries -mx-3 mt-8 flex flex w-full flex-wrap">
          {props.children}
        </div>
      </section>
    </React.Fragment>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Entries;
