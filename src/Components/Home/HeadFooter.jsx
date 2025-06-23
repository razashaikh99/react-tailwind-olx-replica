import Store1 from "../../assets/images/store-1.png"
import Store2 from "../../assets/images/store-2.png"
import Store3 from "../../assets/images/store-3.png"
import Head from "../../assets/images/head-footer.png"

export default function HeadFooter() {
    return (
        <div className='border-b-2 border-gray-200'>
            <div className='px-4 sm:p-8 md:px-16 lg:px-28 sm:py-5 md:py-6 lg:py-0 bg-head-footer w-full min-h-44 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center gap-6'>

                <div className='text-center md:text-left'>
                    <p className='text-gray text-xl sm:text-2xl font-extrabold'>Find amazing deals on the go.</p>
                    <p className='text-blue text-xl sm:text-2xl font-extrabold'>Download OLX app now!</p>
                </div>
                
                <div className='mt-10 flex justify-center lg:ml-28'>
                    <img
                        className='w-40 lg:w-48'
                        src={Head}
                        alt="OLX app"
                    />
                </div>
                
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3'>
                    <div className='w-28 sm:w-32 cursor-pointer'>
                        <img
                            src={Store1}
                            alt="App Store"
                        />
                    </div>
                    <div className='w-28 sm:w-32 cursor-pointer'>
                        <img
                            src={Store2}
                            alt="Google Play"
                        />
                    </div>
                    <div className='w-28 sm:w-32 cursor-pointer'>
                        <img
                            src={Store3}
                            alt="App Gallery"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}