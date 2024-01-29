import React from "react"
import Image3 from "../../assets/image3.jpg"
import Image2 from "../../assets/image2.jpg"
import Image1 from "../../assets/image1.png"

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
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                  modi?
                </p>
                <div className="">
                  <button className="">Order Now </button>
                </div>
              </div>
              {/* text content section */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
