import Image from 'next/image';
import { motion } from 'framer-motion';


const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-wider text-center lg:py-64">
          Interior Designer ?
        </h1>
      </div>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div
           
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <Image
                className="rounded-2xl"
                src="/image/Aboutus.jpg"
                alt="about"
                width={600} // specify width and height to optimize loading
                height={400}
              />
            </div>
          </div>

          <div
            
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 ">I am Deepak Suthar an experienced Interior Designer with a strong background in AutoCAD, site supervision, and design. Interior designing is not just my profession but a cherished family legacy, which has given me a deep-rooted passion for creating functional and aesthetically pleasing spaces. I bring creativity, attention to detail, and technical expertise to every project I undertake.

With hands-on experience in site visits, measurement sheets, and preparing accurate quotations, I ensure that projects are executed seamlessly from concept to completion. I am well-versed in the latest trends and materials in interior design, which allows me to deliver contemporary, innovative, and luxurious solutions tailored to client needs. My expertise extends to collaborating with clients, contractors, and teams to maintain design integrity and quality on-site.

I take pride in my ability to manage projects efficiently while upholding the highest standards of professionalism, creativity, and precision.</p>
            </div>
          <div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default page;
