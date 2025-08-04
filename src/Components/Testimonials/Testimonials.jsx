import React from 'react'
import Slider from 'react-slick';

const TestimonailData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus odit a quo beatae dolor est reiciendis qui quia sunt.",
        img: "https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus odit a quo beatae dolor est reiciendis qui quia sunt.",
        img: "https://images.unsplash.com/photo-1562707653-a88e91725cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    },
    {
        id: 3,
        name: "Anushaka sharma",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus odit a quo beatae dolor est reiciendis qui quia sunt.",
        img: "https://plus.unsplash.com/premium_photo-1725408049407-1c86e06715e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    },
    {
        id: 4,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus odit a quo beatae dolor est reiciendis qui quia sunt.",
        img: "https://images.unsplash.com/photo-1542296144-61d71dc5aa11?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc3RpbW9uaWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        name: "Sadaf Naaz",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus odit a quo beatae dolor est reiciendis qui quia sunt.",
        img: "https://images.unsplash.com/photo-1671154453575-b0cea38bb19a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlc3RpbW9uaWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    },
]

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
             <p data-aos="fade-up" className='text-sm text-primary'>What Our Customers are Saying</p>
             <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonails</h1>
             <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, maxime.</p>
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