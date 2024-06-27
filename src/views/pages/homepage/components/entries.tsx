import React from "react";

const Entries = (props: Props) => {
  return (
    <React.Fragment>
      <section id="rockets" className="mx-auto max-w-screen-2xl px-6">
        <div className="rounded-2xl bg-black p-8 px-6 md:p-16">
          <h1 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-white">
            Rocket Types
          </h1>
          <p className="text-grey mb-8 text-gray-400">
            Explore different types of rockets that have revolutionized space
            exploration.
          </p>
          {/* The listings */}
          <div className=" mt-8 flex grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            {props.children}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Entries;
