import React from "react";

function NotFound() {
  return (
    <section className="bg-gray-100 w-full min-h-screen">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="text-gray-400 text-center font-bold">
            <h1 className="mt-[200px] text-[80px]">
              Oops! <br></br> 404 <br></br>
              <span className="text-[20px]"> Webpage Not Available..</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
