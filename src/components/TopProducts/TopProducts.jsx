// import React from 'react'
import Image1 from "../../assets/image1.png"

const ProductData = [
  {
    id: 1,
    img: Image1,
    title: "Product Title 1",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 2,
    img: Image1,
    title: "Product Title 2",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 3,
    img: Image1,
    title: "Product Title 3",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 4,
    img: Image1,
    title: "Product Title 4",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 5,
    img: Image1,
    title: "Product Title 5",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 6,
    img: Image1,
    title: "Product Title 6",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 7,
    img: Image1,
    title: "Product Title 7",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
  {
    id: 8,
    img: Image1,
    title: "Product Title 8",
    description:
      "I have a cure for insomnia. Its probably worth millions of dollars but Im giving it to you free. It isnt warm milk or chamomile tea. Its list making. List stuff from your life like all your teachers or all the live music youve seen or all the Paul Newman movies youve watched",
  },
]

const TopProducts = () => {
  return (
    <>
      <div>
        <div className="container">
          {/* Header Section */}
          <div className="text-left  mb-10">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Rated Products for You
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Best Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
              optio incidunt. Molestiae id molestias doloribus repellat
              explicabo. Iure, repellendus. Id?
            </p>
          </div>
          {/* Body Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductData.map(data => (
              <div key={data.id} className="">
                {/* image section */}
                <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-whiite relative shadow-xl duration-high group max-w-[300px]">
                  <img src={data.img} alt="" />
                </div>
                {/* details section */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopProducts
