import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <div className="h-1 bg-gradient-to-r from-[#3498db] to-[#c0392b]"></div>
      <div className="px-12 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </div>
      </div>
    </React.Fragment>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="site-logo row flex items-center justify-center">
      <img
        alt="Site logo"
        src="/assets/images/logo.png"
        width={32}
        height={32}
      />
      <div className="text-md ml-4 font-medium">Arch Rockets</div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="text-md text-gray-600">
        <Link
          href="https://github.com/vatto1337/arch-rockets-t3-app"
          target="blank"
          className="hover:underline "
        >
          Github Repository
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Header;
