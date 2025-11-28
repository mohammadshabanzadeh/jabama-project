import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-2 px-5 md:px-15  border-b-2 border-gray-400/50 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://fs.sibapp.net/file/image/application/64e5e1502f1e48178e94d41a71539dbd.png.medium"
            className="w-20 flex-row-reverse rounded-full"
            alt=""
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:border hover:transition-all transition px-4 py-3 rounded-lg">
            ورود به حساب
          </Link>
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-3 rounded-lg"
          >
            {" "}
            ثبت نام{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
