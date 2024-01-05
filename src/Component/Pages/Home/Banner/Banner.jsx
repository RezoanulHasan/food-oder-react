import React from "react";
import banner from "../../../../assets/images/banner.png";
const Banner = () => {
  return (
    <>
      <div className="mt-10 mb-10  mx-0 flex lg:flex-row md:flex-row flex-col  bg-orange-400 p-2 lg:rounded-xl  rounded-full ">
        <div className="w-full lg:w-1/2 lg:mx-10 mx-6 sm:bg-transparent">
          <h1 className="text-white mt-20 mx-3 lg:mx-32 text-3xl">
            Deliver Food To Your
          </h1>
          <h1 className="text-white mx-3 lg:mx-32 text-3xl">Door Step |</h1>
          <h1 className="text-white mx-3 lg:mx-32 ">
            Authentic Food,Quick Service Fast Delivery
          </h1>
        </div>

        <div className="w-full lg:w-1/2 lg:mx-10 mx-2 sm:bg-transparent">
          <img
            className="rounded-full w-96 mt-2  h"
            alt="profile"
            src={banner}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
