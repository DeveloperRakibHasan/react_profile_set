import React from "react";
import {Link} from 'react-router-dom'
import errimg from '../../assets/image/404-logo.png'

function NotFound() {
  return (
    <section className="bg-green-100 w-full min-h-screen flex items-center">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="text-center font-bold">
            <h1 className=" text-[80px] text-red-500">
              Oops! <br></br> <img src={errimg} alt="" /> <br></br>
            </h1>
            <Link className="px-4 py-2 rounded-lg bg-green-400 text-white" to="/">
              Go back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
