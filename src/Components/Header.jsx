import { FiSearch } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-28">
            <div className="flex flex-col sm:flex-row justify-center items-center pt-4 gap-2 sm:gap-0">

                <div className='w-full sm:w-auto sm:min-w-[180px] md:min-w-[220px] lg:w-[360px] py-2 sm:py-3 px-3 rounded-lg border border-gray-300 mr-0 sm:mr-2 md:mr-4 flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <FaLocationDot color='#367EFF' size={15} />
                        </div>
                        <div className='ml-2 text-gray text-sm sm:text-base'>
                            <p>Pakistan</p>
                        </div>
                    </div>
                    <div>
                        <IoIosArrowDown size={18} className="text-gray" />
                    </div>
                </div>

                <div className='w-full sm:flex-1 md:w-auto lg:w-[810px] border border-gray-300 py-2 sm:py-3 px-3 rounded-l-lg sm:rounded-l-none md:rounded-l-lg cursor-text'>
                    <p className='text-gray text-sm sm:text-base'>Find Cars, Mobile Phones and more...</p>
                </div>

                <div className='w-full sm:w-auto sm:min-w-[100px] md:w-[110px] border border-gray-300 bg-gray text-white py-2 sm:py-3 rounded-r-lg text-center flex justify-center items-center cursor-pointer hover:bg-gray-700 transition-colors'>
                    <div>
                        <FiSearch size={18} className="sm:size-5" />
                    </div>
                    <p className='ml-2 text-sm sm:text-base'>Search</p>
                </div>

            </div>

            <hr className='mt-3 border-gray-300' />
        </div>
    )
}