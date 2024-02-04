// import React from "react"
import BannerImg1 from "../../assets/image1.png"
// import BannerImg2 from "../../assets/image2.jpg"
// import BannerImg3 from "../../assets/image3.jpg"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="" data-aos="zoom-in">
              <img
                src={BannerImg1}
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-fit"
                alt=""
              />
            </div>
            {/* text details Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Winter Sale Upto 500% Off
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis dicta voluptatem nam nesciunt cupiditate dolorem aut
                perferendis reiciendis rerum hic.
              </p>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Fast Delivery</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Easy Payment Method</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-lime-100 dark:bg-lime-400" />
                  <p>Get Offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
