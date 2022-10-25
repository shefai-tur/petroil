import React from 'react'
import {IoIosArrowForward}from"react-icons/io"
const Blog = () => {
  return (
    <section className='bg-[#f0f0f0] py-28 mt-24'>
        <div className="max-w-container mx-auto px-2.5 md:px-0">
            <div className="md:flex justify-between">

                <div className="md:w-[339px] bg-cover bg-center bg-no-repeat	 " style={{backgroundImage:`url(images/blog1.png)`}}>
                <div className="bg-darklighte h-full w-full py-16 px-11 ">
                    <h4 className='font-pop font-bold text-2xl md:w-[249px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-slate-400 hover:bg-transparent hover:text-slate-400 hover:border-white ease-linear	duration-300	"
            href="#"
          >
            Read more
          </a>
          </div>
          </div>
                <div className="md:w-[339px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(images/blog2.png)`}}>
                <div className="bg-darklighte h-full w-full py-16 px-11">
                    <h4 className='font-pop font-bold text-2xl md:w-[249px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-slate-400 hover:bg-transparent hover:text-slate-400 hover:border-white ease-linear	duration-300	"
            href="#"
          >
            Read more
          </a>
          
                </div>
                </div>
                <div className="md:w-[339px] bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(images/blog3.png)`}}>
                <div className="bg-darklighte h-full w-full py-16 px-11">
                    <h4 className='font-pop font-bold text-2xl md:w-[249px] text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                    <a
            className="font-pop text-base font-semibold	text-white inline-block border border-transparent py-3.5 px-8 mt-7	bg-slate-400 hover:bg-transparent hover:text-slate-400 hover:border-white ease-linear	duration-300	"
            href="#"
          >
            Read more
          </a>
          
                </div>
                </div>
                
            </div>
            <h4 className='flex justify-end	font-pop font-bold text-base relative'>MORE FROM THE BLLOG <IoIosArrowForward className=' top-[4px] right-[-11px] absolute'/> </h4>
        </div>
    </section>
  )
}

export default Blog