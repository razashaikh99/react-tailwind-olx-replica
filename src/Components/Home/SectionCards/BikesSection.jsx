import Card from '../Card'

export default function BikesSection() {

    const bikesCards = [
        {
            img: "https://www.stratstone.com/-/media/stratstone/bmw-motorrad/bikes/adventure/r-1300-gsa/r-1300-gsa-720x405px-1.ashx",
            rupees: "3.5 Lacs",
            title: "BMW R 1300 GS Adventure Bikes For Sale 2020",
            km: "32,900km • 2020",
            location: "Johar Town, Lahore",
            ago: "1 weeks ago"
        },
        {
            img: "https://cache4.pakwheels.com/ad_pictures/1065/honda-cd-70-3-1981-106533717.webp",
            rupees: "90,000",
            title: "Used Honda CD 70 1981 Bike for sale in Karachi 2016",
            km: "20,500km • 2016",
            location: "Gulshan e Iqbal, Karachi",
            ago: "2 days ago"
        },
        {
            img: "https://cache3.pakwheels.com/ad_pictures/9648/honda-cg-125-special-edition-2019-96481932.webp",
            rupees: "220,000",
            title: "Used Honda CG 125 Special Edition 2019 Bike for Sale",
            km: "3,400km • 2019",
            location: "Model Link Road, Kashmir",
            ago: "3 weeks ago"
        },
        {
            img: "https://cache3.pakwheels.com/ad_pictures/8057/honda-cd-70-3-2021-80575099.webp",
            rupees: "110,000",
            title: "Used Honda CD 70 2021, Bike for Sale in Islamabad",
            km: "10,500km • 2021",
            location: "Gulberg Town, Islamabad",
            ago: "8 days ago"
        },
    ]

    return (
        <div className="">

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Bikes & Motorcycles
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {bikesCards.map((bike, index) => (
                    <Card
                        key={index}
                        c_img={bike.img}
                        c_rupees={bike.rupees}
                        c_title={bike.title}
                        c_text={bike.km}
                        c_location={bike.location}
                        c_ago={bike.ago}
                    />
                ))}
            </div>
            
        </div>
    )
}
