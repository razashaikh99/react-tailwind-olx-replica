import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollButton() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisible)

        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className='fixed bottom-25 right-10'>
                {isVisible && (
                    <button
                        onClick={scrollTop}
                        className="bg-white text-gray rounded-full border-1 hover:border-3 border-light-gray px-3 w-auto h-10 flex items-center justify-center shadow-md"

                    >
                        <MdOutlineKeyboardDoubleArrowUp  size={22} />
                        <p className='px-1 font-extrabold text-[14px]'>Back to top</p>
                    </button>
                )}
            </div>

        </div>
    )
}
