import { LuPlus } from "react-icons/lu";
import imgLogo from "../assets/images/olx-logo.png"
import houseIcon from "../assets/images/house-icon.png"
import carIcon from "../assets/images/car-icon.png"

export default function Navbar() {
    return (
        <div className="w-full">

            <div className='px-4 sm:px-8 md:px-16 lg:px-28 w-full h-16 m-0 bg-navbar flex justify-between items-center text-text-gray'>
                <div className='mt-2 flex justify-start items-center gap-4 sm:gap-6 md:gap-8 cursor-pointer'>
                    <div className='bg-white p-2 sm:p-3 rounded-t-2xl'>
                        <img
                            className='w-10 sm:w-12 md:w-15'
                            src={imgLogo}
                            alt="OLX Logo"
                        />
                    </div>
                    <div className='hidden sm:flex justify-center items-center'>
                        <div className=''>
                            <img
                                className='w-8 sm:w-10 md:w-12'
                                src={carIcon}
                                alt="Motors"
                            />
                        </div>
                        <div className='font-bold hover:text-blue ml-1 sm:ml-2'>
                            <p className='text-sm sm:text-base'>Motors</p>
                        </div>
                    </div>
                    <div className='hidden sm:flex justify-center items-center'>
                        <div className=''>
                            <img
                                className='w-7 sm:w-9 md:w-10'
                                src={houseIcon}
                                alt="Property"
                            />
                        </div>
                        <div className='font-bold hover:text-blue ml-1 sm:ml-2'>
                            <p className='text-sm sm:text-base'>Property</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center cursor-pointer gap-3 sm:gap-5'>
                    <div className=''>
                        <button className='font-bold underline text-sm sm:text-base'>LogIn</button>
                    </div>
                    <div className='flex justify-center items-center gap-1 rounded-full bg-white px-2 sm:px-3 py-1 sm:py-1.5 border-2 sm:border-4 border-button-border'>
                        <div className=''>
                            <LuPlus size={16} className="sm:size-5" />
                        </div>
                        <div className='font-bold text-sm sm:text-base'>
                            SELL
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}