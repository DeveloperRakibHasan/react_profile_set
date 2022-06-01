import React from "react";

function Layout({ children }) {
  return (
    <>
      <main className="mt-16">
        <div>{children}</div>
      </main>
    </>
  );
}

export default Layout;
