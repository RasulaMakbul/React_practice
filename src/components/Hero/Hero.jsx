// import React from "react"
import Image3 from "../../assets/image3.jpg"
import Image2 from "../../assets/image2.jpg"
import Image1 from "../../assets/image1.png"
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Hero 1 Title 1",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 2,
    img: Image2,
    title: "Hero 2 Title 2",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 3,
    img: Image3,
    title: "Hero 3 Title 3",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
]

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map(data => (
              <div className="" key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl sm:text-6xl lg:text-7xl font-bold "
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className=""
                    >
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Order Now{" "}
                      </button>
                    </div>
                  </div>
                  {/* Image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Hero
