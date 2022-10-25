import React from 'react'

const Service = () => {
  return (
    <section className='sml:flex flex-wrap px-2.5 md:px-0'>
        <div className="sml:w-2/4 sml:flex flex-col sml:justify-center md:items-end	" >
            <h3 className='font-pop font-bold text-2xl md:text-[64px] md:mr-36'>Our Services</h3>
            <p className='font-pop font-medium text-base md:w-[405px] md:mr-36 my-2.5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        <div className="sml:w-2/4 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(images/Services1.png)`}}>
        <div className="bg-darklighte h-full w-full py-[25px] md:py-36 md:pl-28 pl-[18px]	">
            <h3 className='font-pop font-bold text-[30px]  md:text-[36px] text-white'>Modern natural oil and gas refineries</h3>
            <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-primary hover:bg-transparent hover:text-primary hover:border-primary ease-linear	duration-300	"
            href="#"
          >
            Learn More
          </a>
        </div>
        </div>
        <div className="sml:w-2/4 bg-no-repeat bg-center bg-cover my-1.5 sml:my-0" style={{backgroundImage:`url(images/Services2.png)`}}>
        <div className="bg-darklighte h-full w-full py-[25px] md:py-36 md:pl-28 pl-[18px]	">
            <h3 className='font-pop font-bold  text-[30px]  md:text-[36px] text-white'>Modern natural oil and gas refineries</h3>
            <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-primary hover:bg-transparent hover:text-primary hover:border-primary ease-linear	duration-300	"
            href="#"
          >
            Learn More
          </a>
        </div>
        </div>
        <div className="sml:w-2/4 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(images/Services3.png)`}}>
        <div className="bg-darklighte h-full w-full py-[25px] md:py-36 md:pl-28 pl-[18px]	">
            <h3 className='font-pop font-bold  text-[30px]  md:text-[36px] text-white'>Modern natural oil and gas refineries</h3>
            <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-primary hover:bg-transparent hover:text-primary hover:border-primary ease-linear	duration-300	"
            href="#"
          >
            Learn More
          </a>
        </div>
        </div>
        
    </section>
  )
}

export default Service