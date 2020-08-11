import React from "react";

function Footer() {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e6ecf0",
      }}
      className="footer"
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: 300,
          paddingTop: "30px",
          color: "#808080",
        }}
      >
        Made by Srujan with Reactjs
      </h2>
      <h2
        style={{
          textAlign: "center",
          fontSize: "13px",
          paddingBottom: "10px",
          fontWeight: 300,
          color: "#808080",
        }}
      >
        All content belongs to their respective owners
      </h2>
      <a
        style={{
          textAlign: "center",
          fontSize: "13px",
          paddingBottom: "30px",
          fontWeight: 300,
          color: "#808080",
        }}
        href="https://github.com/Royal-lobster/twitterclone-react"
      >
        Check out the code in my github repo
      </a>
    </div>
  );
}

export default Footer;
