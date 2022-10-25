import React from "react";

const Banner = () => {
  return (
    <div className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage:`url(images/banner.png)`
    }}>
      <div className="bg-darklighte h-full w-full py-24 md:py-64	">
        <div className="max-w-container mx-auto px-2.5 md:px-0">
          <p className="font-pop font-bold text-3xl	 md:text-6xl text-white md:w-[842px] md:leading-[80px]">
            We exist since 1975 on the oil and gas industry.
          </p>
          <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-primary hover:bg-transparent hover:text-primary hover:border-primary ease-linear	duration-300	"
            href="#"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;
