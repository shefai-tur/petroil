import React from "react";
import{IoMdMailUnread} from "react-icons/io"
import{BiPhoneCall} from "react-icons/bi"
import{RiRoadMapLine} from "react-icons/ri"
import{BsFacebook} from "react-icons/bs"
import{AiFillTwitterCircle} from "react-icons/ai"
import{AiFillLinkedin} from "react-icons/ai"
import{FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <section className="pt-[88px] pb-11 bg-black">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="sml:flex">
          <div className="w-2/5">
            <picture>
              <img
                src="images/footerLogo.png"
                alt="footerLogo"
                loading="lazy"
              />
              </picture>
              <ul className="text-white mt-8 font-pop font-regular text-sm ml-4">
                <li className=" relative"><IoMdMailUnread className="absolute mt-[6px] ml-[-20px]"/>mail@yourcompany.com</li>
                <li className="relative py-3.5"><BiPhoneCall className="absolute mt-[6px] ml-[-20px]"/>+896 120 5889 (Toll free)</li>
                <li className="relative"><RiRoadMapLine className="absolute mt-[6px] ml-[-20px]"/>101 Baker Street, New York, USA, 12345</li>
              </ul>
            
           
                <div className="flex gap-3 text-primary mt-8">
                <BsFacebook className="bg-white"/>
                <AiFillTwitterCircle className="bg-white"/>
                <AiFillLinkedin className="bg-white"/>
                <FaInstagram className="bg-white"/>
                </div>
            
          </div>
          <div className="w-1/6">
            <ul className="text-white mt-4 font-pop text-sm font-regular">
              <li className="font-pop font-bold text-base mb-5">Company</li>
              <li>Home</li>
              <li className="py-3.5">About</li>
              <li>Services</li>
              <li className="pt-3.5">Gallery</li>
            </ul>
            
          </div>
          <div className="w-1/6">
            <ul className="text-white mt-4 font-pop text-sm font-regular">
                <li className="font-pop font-bold text-base mb-5">Others</li>
                <li>Blog</li>
                <li className="py-3.5">Contact</li>
                <li>Terms & Conditions</li>
                <li className="pt-3.5">Privacy Policy</li>
            </ul>
          


          </div>
          <div className="w-2/5">
            <div className="text-white mt-4">
                <h3 className="font-pop font-bold text-base mb-5">Certificate</h3>
                <picture className="flex gap-3">
                    <img src="images/Cert1.png" alt="" />
                    <img src="images/Cert2.png" alt="" />
                </picture>
            </div>
          </div>
        </div>
        <h4 className="text-para mt-[213px]">© Copyright 2022 by AltDesain Studio – All right reserved.</h4>
      </div>
    </section>
  );
};

export default Footer;
