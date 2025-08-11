import React from 'react'
import Img1 from "../../assets/tp1.jpg"
import Img2 from '../../assets/tp2.jpg'
import Img3 from "../../assets/tp3.jpg"
import Img4 from "../../assets/tp4.jpg"
import Img5 from "../../assets/tp5.jpg"
import Slider from 'react-slick';

const TestimonailData = [
  {
    id: 1,
    name: "Aarav Mehta",
    text: "I absolutely love the quality and style of the clothes I ordered! The delivery was fast and the packaging was premium.",
    img: Img1,
  },
  {
    id: 2,
    name: "Sophie Williams",
    text: "The designs are so trendy! I got so many compliments wearing my new dress. Will definitely shop here again.",
    img: Img2,
  },
  {
    id: 3,
    name: "Ravi Sharma",
    text: "Best online shopping experience ever! Everything fits perfectly and the material is so comfortable.",
    img: Img3,
  },
  {
    id: 4,
    name: "Emily Carter",
    text: "From ordering to delivery, the process was super smooth. The clothes look even better in person!",
    img: Img4,
  },
  {
    id: 5,
    name: "Kabir Khan",
    text: "I’m impressed with the attention to detail. The stitching and finish are top-notch. Highly recommended!",
    img: Img5,
  },
];

const Testimonials = () => {

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase:"linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive :[
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
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
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  };

  return (
    <div className='py-10 mb-10'>
        <div className='container '>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
             <p data-aos="fade-up" className='text-sm text-primary'>What Our Customers Are Saying</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold mb-2 mt-2'>Testimonails</h1>
             <p data-aos="fade-up" className='text-sm text-gray-400'>Real stories from our happy customers — sharing their experiences, style journeys, and why they trust us for fashion they love.</p>
            </div>
            {/* Testimonail Card */}
            <div data-aos="zoom-in">
              <Slider {...settings}>{
                TestimonailData.map((data) =>(
                    <div className='my-6 '>
                    <div
                    key={data.id}
                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                    >
                        <div className='mb-4'>
                            <img src={data.img} alt="" 
                            className='rounded-full w-20 h-20'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                                 <p
                                className='text-xs text-gray-500'
                                >{data.text}</p>
                                <h1
                                className='text-xl font-bold text-black/80 dark:text-light'
                                >{data.name}</h1>
                            </div>                           
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                    </div>
                    </div>
                ))}
              </Slider>  
            </div>
        </div>
    </div>
  );
};

export default Testimonials