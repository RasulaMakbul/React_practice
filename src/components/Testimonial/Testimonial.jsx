// import React from 'react'
import Slider from "react-slick"

const TestimonialData = [
  {
    id: 1,
    name: "Inaara",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, optio incidunt. Molestiae id molestias doloribus repellat explicabo. Iure, repellendus. Id?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Annum",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, optio incidunt. Molestiae id molestias doloribus repellat explicabo. Iure, repellendus. Id?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Inaara",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, optio incidunt. Molestiae id molestias doloribus repellat explicabo. Iure, repellendus. Id?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Inaara",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, optio incidunt. Molestiae id molestias doloribus repellat explicabo. Iure, repellendus. Id?",
    img: "https://picsum.photos/104/104",
  },
]

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="py-10 mb-19">
        <div className="container">
          {/* Body Section */}
          <div className="text-center mb-10 mx-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              What Our Customer Says
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Testimonial
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
              optio incidunt. Molestiae id molestias doloribus repellat
              explicabo. Iure, repellendus. Id?
            </p>
          </div>
          {/* Testimonial Cards */}
          <div data-aos="zoom-in" className="">
            <Slider {...settings}>
              {TestimonialData.map(data => (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        className="rounded-full w-20 h-20 "
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-23">
                        <p className="text-xs text-gray-400">{data.text}</p>
                        <h1 className="text-xl font-bold text-black-800 dark:text-light">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute to-0 right-0">
                      &#8217;&#8217;
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
