/* eslint-disable no-unused-vars */
import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-[#CDEA68]">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" text-[#CDEA68] border-[#CDEA68] absolute left-10 bottom-6 px-5 py-1 border-2 rounded-full">
            &copy;2019-2022
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="text-[#CDEA68] border-[#CDEA68] absolute left-5 bottom-6 px-5 py-1 border-2 rounded-full">
              Rating 5.0 on Clutch
          </button>
        </div>


        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[#CDEA68] border-[#CDEA68] left-5 bottom-6 px-3 py-1 border-2 rounded-full">
              Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
