import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import NextLink from "next/link";

function Navbar() {
  const flexStyle: React.CSSProperties = {
    padding: "1.5em 0.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    boxSizing: "border-box",
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const textStyle: React.CSSProperties = {
    marginLeft: "1em",
    fontSize: "1.25em",
    fontWeight: "bold",
  };

  // Update this style to left-align the links:
  const linkContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // left-align
    flex: 1,
    marginLeft: "4em",
    gap: "1em", // adds spacing between links
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div style={flexStyle}>
      {/* Logo */}
      <div style={boxStyle}>
        <img src="hoya-boy.png" alt="Logo" width={50} height={50} />
        <span style={textStyle}>kessyNuma</span>
      </div>

      {/* Links */}
      <div style={linkContainerStyle}>
        <NextLink href="/" passHref legacyBehavior>
          <a style={linkStyle}>Demo</a>
        </NextLink>

        <NextLink href="/about" passHref legacyBehavior>
          <a style={linkStyle}>About</a>
        </NextLink>
      </div>

      {/* Connect Button */}
      <ConnectButton />
    </div>
  );
}

export default Navbar;

