import MobilesSection from './SectionCards/MobilesSection'
import AdvertiseImg from './AdvertiseImg'
import CarsSection from './SectionCards/CarsSection'
import BikesSection from './SectionCards/BikesSection'
import HouseSection from './SectionCards/HouseSection'
import Audios from './SectionCards/Audios'
import Tablets from './SectionCards/Tablets'
import Plots from './SectionCards/Plots'
import Jobs from './SectionCards/Jobs'

export default function SectionTwo() {
  return (
    <div className='mb-10 px-8 sm:px-12 md:px-18 lg:px-24 xl:px-[120px]'>
      <MobilesSection />
      <AdvertiseImg />
      <CarsSection />
      <BikesSection />
      <HouseSection />
      <Audios />
      <Tablets />
      <Plots />
      <Jobs />
    </div>
  )
}
