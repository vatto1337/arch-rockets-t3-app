import React from "react";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

const Container = (props: Props) => {
  return (
    <React.Fragment>
      {/* The Header */}
      <Header />
      {props.children}
      {/* The Footer */}
      <Footer />
    </React.Fragment>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Container;
