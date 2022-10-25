import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-black border-b-4 border-yborder border-solid ">
      <div className="max-w-container mx-auto px-2.5 lg:px-0">
        <div className="sml:flex py-4  text-white">
          <div className="md:w-1/2 sml:w-2/3 sml:flex">
            <p className="font-pop text-xs font-normal relative pl-6 after:absolute after:top-0 after:right-[-28px] after:h-full after:w-0.5 after:content-[''] sml:after:bg-[#5C6A92]">
              <AiOutlineMail className="absolute left-0 top-[-3px] text-xl" />
              mail@yourcompany.com
            </p>
            <p className="font-pop text-xs font-normal relative pl-6 sml:ml-14 mt-2.5 sml:mt-0">
              <BiPhoneCall className="absolute left-0 top-[-3px] text-xl" />
              +896 120 5889 (Toll free)
            </p>
          </div>
          <div className="w-1/2 sml:w-1/3 flex sml:justify-end gap-x-3 md:gap-x-5 mt-2.5 sml:mt-0 sml:mr-3">
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <RiInstagramLine />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
