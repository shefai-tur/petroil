import React from 'react'

const Logo = () => {
  return (
   <section>
    <div className="max-w-container mx-auto px-2.5 md:px-0">
        <picture className='flex flex-wrap md:flex-nowrap justify-between mt-[117px] '>
            <img src="images/Logo1.png" alt="Logo1" loading='lazy' />
            <img src="images/Logo2.png" alt="Logo2" loading='lazy' />
            <img src="images/Logo3.png" alt="Logo3" loading='lazy' />
            <img src="images/Logo4.png" alt="Logo4" loading='lazy' />
        </picture>
    </div>
   </section>
  )
}

export default Logo