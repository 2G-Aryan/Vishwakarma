import React from 'react'

const Page = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p2.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p1.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p6.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p8.jpg" alt="no" />
        </div>
      </div>

      
      <div className='flex flex-col gap-4'>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/swiper1.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/gallery11.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/living.jpg" alt="no" />
        </div>
      </div>


      <div className='flex flex-col gap-4'>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/gallery14.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/gallery15.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/image/gallery12.jpg" alt="no" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p3.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p9.jpg" alt="no" />
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p5.jpg" alt="no" />
        </div>
      </div>
    </div>
  )
}

export default Page
