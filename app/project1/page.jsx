import React from 'react'

const page = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
    <div className='flex flex-col gap-4'>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro1.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro2.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro3.jpeg" alt="no" />
      </div>
     
    </div>

    
    <div className='flex flex-col gap-4'>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro5.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro6.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro7.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro4.jpeg" alt="no" />
      </div>
    </div>


    <div className='flex flex-col gap-4'>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro8.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro9.jpeg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/pro10.jpeg" alt="no" />
      </div>
      
    </div>
    {/* <div className='flex flex-col gap-4'>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p3.jpg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p9.jpg" alt="no" />
      </div>
      <div>
        <img className="w-full h-full object-cover rounded-lg hover:scale-90 transition-all" src="/images/p5.jpg" alt="no" />
      </div>
    </div> */}
  </div>
  )
}

export default page
