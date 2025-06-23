import { CgHeart } from 'react-icons/cg'

export default function Card(props) {
    return (
        <div>

            <div className='border-1 border-gray-300 rounded-md cursor-pointer'>
                <div className=''>
                    <img
                        className='w-full h-40 object-cover rounded-t-md'
                        src={props.c_img}
                        alt=""
                    />
                </div>
                <div className='px-4 text-gray sm:h-52 md:h-48 lg:h-auto xl:h-auto'>
                    <div className='flex justify-between py-3'>
                        <div className=''>
                            <p className='text-[15px] font-extrabold'>Rs. {props.c_rupees}</p>
                        </div>
                        <div className='hover:text-red-500 pl-3'>
                            <CgHeart size={20} />
                        </div>
                    </div>
                    <div>
                        <p className='pb-2 text-[16px]'>{props.c_title}</p>
                        <p className='pb-1 text-[15px] text-light-gray font-bold'>{props.c_text}</p>
                        <p className='pb-1 text-[15px] text-light-gray'>{props.c_location}</p>
                        <p className='pb-2 text-[13px] text-light-gray'>{props.c_ago}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
