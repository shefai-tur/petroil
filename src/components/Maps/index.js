import React from 'react'

const Maps = () => {
  return (
    <section>
        <picture >
            <img className='w-full' src="images/Maps.png" alt="Maps Image" loading='lazy'/>
        </picture>
        <div className="py-11 bg-primary border-b-4 border-yborder border-solid">
        <div className="max-w-container mx-auto flex ">
          <h3 className='font-pop md:font-bold  md:text-4xl	text-white '>Want to join as member branch in your area?</h3>
          <a
            className="font-pop text-base font-semibold	text-white inline-block border border-white py-3.5 px-4 hover:bg-white hover:text-primary  ease-linear	duration-300	ml-12"
            href="#"
          >
            CONTACT
          </a>
        </div>
        </div>
    </section>
  )
}

export default Maps