import React from "react";

const Supplier = () => {
  return (
    <section>
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="md:flex justify-between mt-5 md:mt-[78px]">
          <div className="md:max-w-[289px]">
            <h2 className="font-pop font-bold text-3xl md:text-5xl md:leading-[72px]">The biggest supplier on the country</h2>
          </div>
          <div className="md:max-w-[651px] flex items-center mt-5 md:mt-0">
            <p className="font-pop font-medium text-base text-para ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          </div>
        </div>
      </div>
    
     <div className="flex flex-wrap md:flex-nowrap gap-1.5 my-12 md:my-24">
      <picture className="sml:w-[49%] md:w-auto">
      <img src="images/supplier1.png" alt="supplier1" loading="lazy" />
      </picture>
       <picture className="sml:w-[49%] md:w-auto">
       <img src="images/supplier2.png" alt="supplier2" loading="lazy" />
       </picture>
        <picture className="sml:w-[49%] md:w-auto">
          <img src="images/supplier3.png" alt="supplier3" loading="lazy" />
          </picture>
        <picture className="sml:w-[49%] md:w-auto">
        <img src="images/supplier4.png" alt="supplier4" loading="lazy" />
        </picture>
        
        
      </div>
     
    </section>
  );
};

export default Supplier;
