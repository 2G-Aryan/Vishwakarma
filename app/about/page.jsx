import Image from 'next/image';
import { motion } from 'framer-motion';


const page = () => {
  return (
    <div className='font-cinzel'>
     <div className="bg-[url('/img/aboutlogo.png')] bg-center bg-cover ">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-wider text-center lg:py-64">
        </h1>
      </div>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
           <span className="text-neutral-500">Us</span>  
        </h1>
        <div className="flex flex-wrap">
          <div
           
            className="w-full lg:w-1/2 lg:p-8"
          >
            {/* <div className="flex items-center justify-center">
              <Image
                className="rounded-2xl"
                src="/img/livingroom.jpeg"
                alt="about"
                width={600} // specify width and height to optimize loading
                height={400}
              />
            </div> */}
          </div>

<div className="w-full bg-slate py-10 px-4 font-sans text-slate-500">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

    {/* Left Images */}
    <div className="w-full lg:w-1/4 flex flex-col items-center gap-4">
      <img src="/imgs/q1.jpeg" alt="Image 1" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src="/imgs/q2.jpeg" alt="Image 2" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src="/imgs/q3.jpeg" alt="Image 3" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2">
      <div className="text-center lg:text-left space-y-6  font-cinzel">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 font-cinzel">
          🏆 30+ Years of Industry Excellence
        </h2>
        <p className="text-base lg:text-lg leading-relaxed">
          With over <span className="font-semibold text-slate-500">30 years of experience</span>, we take great pride in our extensive industry knowledge, deep-rooted expertise, and long-standing presence in the field.
        </p>
        <ul className="list-disc list-inside text-base lg:text-lg pl-4">
          <li>Adapted to ever-evolving industry trends</li>
          <li>Embraced innovation</li>
          <li>Expanded our knowledge base to continually enhance value</li>
        </ul>
        <p className="text-base lg:text-lg">
          Our unwavering commitment to <span className="text-green-700 font-medium">growth</span> and <span className="text-green-700 font-medium">excellence</span> enables us to better serve our clients and stay ahead in a competitive landscape.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-indigo-700 mb-2">
            🏗️ Our Team, Our Strength
          </h3>
          <p className="text-base lg:text-lg">
            With <span className="font-semibold">300+ professionals</span> and <span className="font-semibold">400+ projects</span> completed, our team excels in <span className="text-blue-700">precision</span> and <span className="text-blue-700">creativity</span>.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-purple-700 mb-2">
            🔧 Innovation Through Scale
          </h3>
          <p className="text-base lg:text-lg">
            Our team’s diversity drives <span className="text-purple-800 font-semibold">collaboration</span> and <span className="text-purple-800 font-semibold">innovation</span>, enabling high-quality delivery across simultaneous projects.
          </p>
        </div>
      </div>
    </div>

    {/* Right Images */}
    <div className="w-full lg:w-1/4 flex flex-col items-center gap-4">
      <img src="/imgs/q9.jpeg" alt="Image 4" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src="/imgs/q10.jpeg" alt="Image 5" className="rounded-lg shadow-md w-full h-40 object-cover" />
      <img src="/imgs/q11.jpeg" alt="Image 6" className="rounded-lg shadow-md w-full h-40 object-cover" />
    </div>

  </div>
</div>


 <section className="bg-slate-100 py-12 px-4 m-auto">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Address of Office</h2>
        <p className="text-lg text-gray-600 mb-4">
Atlanta business hub opp ofira posh near croma vesu surat
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4377.661995911055!2d72.78663605743019!3d21.14461897042004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA4JzQxLjMiTiA3MsKwNDcnMjIuMyJF!5e0!3m2!1sen!2sin!4v1749831209762!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


       
        </div>
      </div>
    </section>

    </div>
    </div>
    
    </div>
  );
};

export default page;
