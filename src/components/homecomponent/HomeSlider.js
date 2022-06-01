import React from "react";
import bgimage from "../../assets/image/bg-img.jpg";

function HomeSlider() {
  return (
    <section
      className="w-full h-[100vh] bg-cover bg-no-repeat bg-center bg-blur relative z-10 "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="container">
        <div className="py-20">
          <h2 className="text-white">Home</h2>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
