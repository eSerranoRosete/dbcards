import "../styles/globals.css";

import React from "react";
import NavBar from "../components/NavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
