import React from "react";
import bgimage from "../../assets/image/1.png";

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
              <span className="text-[20px]">React Devloper</span>
              <h1 className="text-[70px] tracking-wider leading-[80px] mt-6 font-bold font-yanone">
                This is a <br></br>{" "}
                <span className="uppercase text-orange-400">React</span> Website
              </h1>
              <p className="text-[18px] text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="flex mt-10">
              <button className="px-4 py-2 bg-orange-400 hover:shadow-lg duration-300 rounded-md text-white mr-4">
                Service
              </button>
              <button className="px-4 py-2 bg-blue-700 hover:shadow-lg duration-300 rounded-md text-white mr-4">
                Contact
              </button>
            </div>
          </div>
          <div>
            <img className="w-[400px] float-right" src={bgimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
