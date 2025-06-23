import carouselImg from "../../assets/images/carousel-img.webp"
import { IoIosArrowDown } from 'react-icons/io'

import cateImg1 from "../../assets/images/cate-img-1.png"
import cateImg2 from "../../assets/images/cate-img-2.png"
import cateImg3 from "../../assets/images/cate-img-3.png"
import cateImg4 from "../../assets/images/cate-img-4.png"
import cateImg5 from "../../assets/images/cate-img-5.png"
import cateImg6 from "../../assets/images/cate-img-6.png"
import cateImg7 from "../../assets/images/cate-img-7.png"
import cateImg8 from "../../assets/images/cate-img-8.png"
import cateImg9 from "../../assets/images/cate-img-9.png"
import cateImg10 from "../../assets/images/cate-img-10.png"
import cateImg11 from "../../assets/images/cate-img-11.png"
import cateImg12 from "../../assets/images/cate-img-12.png"
import cateImg13 from "../../assets/images/cate-img-13.png"
import cateImg14 from "../../assets/images/cate-img-14.png"

export default function SectionOne() {

    const categories = [
        "Mobile Phones", "Cars", "Motorcycles", "Houses", "Video-Audios", "Tablets", "Land & Plots"
    ]

    const categoriesCards = [
        {
            img: cateImg1,
            text: "Mobiles"
        },
        {
            img: cateImg2,
            text: "Vehicles"
        },
        {
            img: cateImg3,
            text: "Property for Sale"
        },
        {
            img: cateImg4,
            text: "Property for Rent"
        },
        {
            img: cateImg5,
            text: "Electronics & Home..."
        },
        {
            img: cateImg6,
            text: "Bikes"
        },
        {
            img: cateImg7,
            text: "Business, Industrial &..."
        },
        {
            img: cateImg8,
            text: "Services"
        },
        {
            img: cateImg9,
            text: "Jobs"
        },
        {
            img: cateImg10,
            text: "Animals"
        },
        {
            img: cateImg11,
            text: "Furniture & Home Decor"
        },
        {
            img: cateImg12,
            text: "Fashion & Beauty"
        },
        {
            img: cateImg13,
            text: "Books, Sports & Hobbies"
        },
        {
            img: cateImg14,
            text: "Kids"
        }
    ]

    return (

        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 mb-6 sm:mb-8">

            <div className='mt-3 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5 text-gray'>
                <div className='flex items-center cursor-pointer'>
                    <p className='font-bold text-sm sm:text-base'>All categories</p>
                    <IoIosArrowDown size={16} className="ml-1 text-gray" />
                </div>
                {categories.map((category, index) => (
                    <div key={index} className='hover:text-blue cursor-pointer'>
                        <p className='text-xs sm:text-sm md:text-base'>{category}</p>
                    </div>
                ))}
            </div>

            <div className='my-6 sm:my-8 md:my-10'>
                <img
                    className='w-full rounded-md'
                    src={carouselImg}
                    alt="Carousel"
                />
            </div>

            <div className='grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-3 sm:gap-4 md:gap-6'>
                {categoriesCards.map((card, index) => (
                    <div key={index} className='w-full'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center p-2'>
                            <img
                                className='w-full h-auto max-h-full object-contain'
                                src={card.img}
                                alt={card.text}
                            />
                        </div>
                        <p className='text-gray text-xs sm:text-base font-extrabold text-center mt-2 line-clamp-2'>
                            {card.text}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}
