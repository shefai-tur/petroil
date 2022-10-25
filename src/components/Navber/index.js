import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
const Navber = () => {
  let [open,setOpen]=useState(false)

  let handelopen =()=>{
 setOpen(!open)
   }
 useEffect (()=>{
  function screenResize(){
    console.log(window.innerWidth)
    if(window.innerWidth >=768){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }
 
window.addEventListener("resize",screenResize)
 },[])

  return (
    <nav className="bg-primary py-7 relative">
      <div className="max-w-container mx-auto px-2.5 lg:px-0">
        <div className="md:flex">
          <div className="md:w-1/5">
            <picture>
              <img src="images/logo.png" alt="logo" loading="lazy" />
            </picture>
          </div>
          <button onClick={handelopen} className="md:hidden absolute top-10	 right-2.5 text-2xl text-white">
            <GoThreeBars/>
          </button>
          {open
          &&
          <div className="md:w-4/5 md:flex md:justify-center 	justify-end items-center mt-3 md:mt-0">
            <ul className="font-pop text-base font-semibold	text-white	flex inline-block	lg:gap-14 gap-5 flex-col md:flex-row ">

              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <a
              className="font-pop text-base font-semibold	text-white inline-block border py-3.5 px-8 lg:ml-16 md:ml-10 mt-3 md:mt-0"
              href="#"
            >
              CONTACT
            </a>
          </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navber;
