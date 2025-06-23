import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6"

export default function Footer() {
  return (
    <div className='bg-bg-footer'>

      <div className='px-4 sm:px-6 lg:px-8 xl:px-28 py-12 sm:py-10 md:py-12'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8'>

          <div className='text-gray'>
            <p className='font-bold text-sm sm:text-base md:text-lg'>Popular Categories</p>
            <div className='mt-3 sm:mt-4 space-y-2'>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Cars</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Flats for rent</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Mobile Phones</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Jobs</p>
            </div>
          </div>

          <div className='text-gray'>
            <p className='font-bold text-sm sm:text-base md:text-lg'>Trending Searches</p>
            <div className='mt-3 sm:mt-4 space-y-2'>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Bikes</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Watches</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Books</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Dogs</p>
            </div>
          </div>

          <div className='text-gray'>
            <p className='font-bold text-sm sm:text-base md:text-lg'>About Us</p>
            <div className='mt-3 sm:mt-4 space-y-2'>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>About Dubizzle Group</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>OLX Blog</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Contact Us</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>OLX for Businesses</p>
            </div>
          </div>

          <div className='text-gray'>
            <p className='font-bold text-sm sm:text-base md:text-lg'>OLX</p>
            <div className='mt-3 sm:mt-4 space-y-2'>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Help</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Sitemap</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Terms of use</p>
              <p className='text-xs sm:text-sm md:text-base hover:text-blue cursor-pointer'>Privacy Policy</p>
            </div>
          </div>

          <div className='text-gray'>
            <p className='font-bold text-sm sm:text-base md:text-lg'>Follow Us</p>
            <div className='flex gap-2 sm:gap-3 mt-3 sm:mt-4'>
              <div className='border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                <FaXTwitter size={16} className="sm:size-5" />
              </div>
              <div className='border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                <FaFacebook size={16} className="sm:size-5" />
              </div>
              <div className='border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                <FaYoutube size={16} className="sm:size-5" />
              </div>
              <div className='border border-gray-400 rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                <FaInstagram size={16} className="sm:size-5" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 w-full py-3 sm:py-4'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32'>
          <p className='text-white text-xs sm:text-sm text-center md:text-right'>
            <span className='font-bold'>Classifieds in Pakistan.</span> © 2006 – 2025 OLX
          </p>
        </div>
      </div>

    </div>
  )
}