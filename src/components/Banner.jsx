import React from "react";
import BgImage from "../assets/images/banner.jpg";
import Search from "./Search";
function Banner() {
  return (
    <div
      className="h-[90vh] bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
        <h1 className="w-[140vh] text-3xl lg:text-[58px] font-semibold leading-none my-8 text-gray-100">
          <span className="text-red-600">ویلای </span>
          ایده آلت همینجاست!
        </h1>
        <p className="max-w-[400px] my-8 mx-4 text-right text-white text-3xl">
          <span className="text-sm">
            {" "}
            اجاره ویلا ، سوییت و اقامتگاه در شمال و سراسر ایران
          </span>
          <br />
          سفر پاییزی از تو ، جاباما
        </p>
      </div>
      <div className="hidden flex-1 lg:flex justify-end items-end">
        <Search />
      </div>
    </div>
  );
}

export default Banner;
