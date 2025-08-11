import React from 'react'
import Products from '../Products/Products'
import Img1 from "../../assets/shirt.png";
import Img2 from "../../assets/shirt2.png";
import Img3 from "../../assets/shirt3.png";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Everyday Wear",
        description: "Stay comfortable and stylish with our premium casual wear – perfect for work, weekends, and everything in between.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Statement Shirt",
        description: "Add a pop of personality to your wardrobe with bold, trendy prints that never go out of style.",
    },
    {
        id: 3,
        img: Img3,
        title: "Elegant Women's Shirt",
        description: "A timeless shirt crafted for both comfort and sophistication – your new go-to for any occasion.",
    },
];

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='conatiner'>
            {/* Header Section */}
            <div className='text-center mb-28 max-w-[600px] mx-auto'>
             <p data-aos="fade-up" className='text-sm text-primary'>Handpicked Just for You</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold mt-2 mb-2'>Best-Selling Favorites</h1>
             <p data-aos="fade-up" className='text-sm text-gray-400'>Discover our top-rated products loved by customers for their quality, comfort, and style. Shop the most popular picks today.</p>
            </div>
            {/* Body Section */}
            <div
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
            >
                {
                    ProductsData.map((data) => (
                        <div
                        key={data.id}
                        data-aos="zoom-in"
                        className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
                        >
                           {/* Image Section */}
                           <div className='h-[100px]'>
                            <img src={data.img} alt="" 
                            className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                            />
                           </div>
                           {/* Details section */}
                           <div className='p-4 text-center'>
                            {/* Star Rating */}
                            <div className='w-full flex items-center justify-center gap-1 '>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                            <button
                            className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                            onClick={handleOrderPopup}
                            >Order Now</button>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts