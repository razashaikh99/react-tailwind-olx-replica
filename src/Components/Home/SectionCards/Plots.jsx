import Card from '../Card'

export default function Plots() {

    const plotsCards = [
        {
            img: "https://www.feeta.pk/uploads/mobile_images/2020-09-30-01-02-46-5282-1601427766_960x719.48608137045_91.webp",
            rupees: "3.5 crore",
            title: "18marla plot in gujranwala moza aroop Gujranwala - Gujranwala",
            location: "DHA Phase 2, Karachi",
            ago: "3 weeks ago"
        },
        {
            img: "https://media.zameen.com/thumbnails/1404915-800x600.jpeg",
            rupees: "90 Lacs",
            title: "10 Marla House for Sale in DHA Phase 1 Lahore",
            location: "DHA Johar Town, Lahore",
            ago: "6 days ago"
        },
        {
            img: "https://www.sabzproperty.com/assets/content/properties/26790/photos/4.jpeg",
            rupees: "2.2 crore",
            title: "Plot/Land Property For Sale in Gujranwala - SabzProperty",
            location: "Paragon City - Gujranwala",
            ago: "2 weeks ago"
        },
        {
            img: "https://is1-2.housingcdn.com/01c16c28/af3c7b981a7865e1f04e2140a0af30a9/v0/fs/4_bhk_independent_house-for-sale-gazipur_punjab-Zirakpur-others.jpg",
            rupees: "94 lacs",
            title: "1 Kanal Designer House for Sale in Bahria Town Karachi",
            location: "Bahria Town, Karchi",
            ago: "9 days ago"
        },
    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Land & Plots
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {plotsCards.map((a) => (
                    <Card
                        c_img={a.img}
                        c_rupees={a.rupees}
                        c_title={a.title}
                        c_location={a.location}
                        c_ago={a.ago}
                    />
                ))}
            </div>

        </div>
    )
}
