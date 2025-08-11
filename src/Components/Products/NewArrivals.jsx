import React from 'react'
import Img1 from "../../assets/na1.jpg";
import Img2 from "../../assets/na2.png";
import Img3 from "../../assets/na3.jpg";
import Img4 from "../../assets/na4.jpg";
import Img5 from "../../assets/na5.jpg";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Floral Summer Dress",
    rating: 4.9,
    color: "Pastel Pink",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Denim Jacket",
    rating: 4.7,
    color: "Light Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Boho Maxi Skirt",
    rating: 4.6,
    color: "Beige",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Leather Crossbody Bag",
    rating: 4.8,
    color: "Tan Brown",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Chunky White Sneakers",
    rating: 4.5,
    color: "White",
    aosDelay: "800",
  },
];


const NewArrivals = () => {
  return (
     <div className='mt-14 mb-12 '>
          <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
              <p data-aos="fade-up" className='text-sm text-primary'>Fresh Styles Just In</p>
              <h1 data-aos="fade-up" className='text-3xl font-bold mb-2 mt-2'>New Arrivals – Women’s Collection</h1>
              <p data-aos="fade-up" className='text-sm text-gray-400'>Be the first to wear our latest arrivals, from breezy summer dresses to must-have accessories for the season.</p>
            </div>
            {/* Body section */}
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
                {/* Card section */}
                {ProductsData.map((data) => (
                  <div 
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className='space-y-3'
                  >
                    <img src={data.img} alt=""
                    className='h-[220px] w-[150px] object-cover rounded-md ' />
                  <div>
                    <h3 className='font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-600'>{data.color}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
              {/* View All Button */}
              <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 rounded-md px-5'>View All Products</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default NewArrivals