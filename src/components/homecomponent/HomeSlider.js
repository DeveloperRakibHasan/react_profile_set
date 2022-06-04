import React from "react";
import bgimage from "../../assets/image/bg-img.jpg";

function HomeSlider() {
  return (
    <section
      className="w-full h-full py-20"
      // style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container">
        <div className="grid gap-8 grid-flow-row grid-cols-2">
          <div>
            <div>
            <span className="text-[22px]">React Devloper</span>
            <h1 className="text-[70px] leading-[80px] mt-6 font-bold">This is a <br></br> <span className="uppercase text-orange-400">React</span> Website</h1>
            </div>
            <div className="flex mt-10">
              <button className="px-4 py-2 bg-orange-400 hover:shadow-lg duration-300 rounded-md text-white mr-4">Service</button>
              <button className="px-4 py-2 bg-blue-400 hover:shadow-lg duration-300 rounded-md text-white mr-4">Contact</button>
            </div>
          </div>
          <div>
            <img className="w-[400px]" src={bgimage} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
