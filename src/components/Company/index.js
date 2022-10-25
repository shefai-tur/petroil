import React from 'react'

const Company = () => {
  return (
    <section className='bg-[#f0f0f0] py-20 md:py-36'>
        <div className="max-w-container mx-auto px-2.5 md:px-0">
            <div className="flex">
                <div className="w-2/5 bg-primary">
                    <h4 className='font-pop font-bold text[20px] sml:text-[36px] py-12 md:py-24 px-8 md:px-16 text-white'>Learn more about our company</h4>
                </div>
                <div className="w-3/5 flex justify-center items-center" style={{backgroundImage:`url(images/companybg.png)`}}>
                     <a
            className="font-pop text-base font-semibold	text-primary inline-block border border-transparent py-3.5 px-8 mt-7	bg-white hover:bg-transparent hover:text-white hover:border-white ease-linear	duration-300	"
            href="#"
          >
            Learn More
          </a>
                </div>
            </div>
           
        </div>

    </section>
  )
}

export default Company