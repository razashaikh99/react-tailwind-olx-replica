import Card from '../Card'

export default function HouseSection() {

    const housesCards = [
        {
            img: "https://i.ytimg.com/vi/OM4nqyszi74/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCrhi2uvRP997CND8csKGRGPIDlkw",
            rupees: "4.9 crore",
            title: "House In DHA Phase 2 For Sale in Karachi",
            beds: "4 beds • 4 baths • 3 marla",
            location: "DHA Phase 2, Karachi",
            ago: "3 weeks ago"
        },
        {
            img: "https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg",
            rupees: "4.1 crore",
            title: "10 Marla House for Sale in DHA Phase 1 Lahore",
            beds: "6 beds • 6 baths • 6 marla",
            location: "DHA Johar Town, Lahore",
            ago: "6 days ago"
        },
        {
            img: "https://media.zameen.com/thumbnails/12960512-800x600.jpeg",
            rupees: "2.2 crore",
            title: "Highly-Desirable House Available In Paragon City",
            beds: "5 beds • 5 baths • 4 marla",
            location: "Paragon City, Lahore",
            ago: "2 weeks ago"
        },
        {
            img: "https://is1-2.housingcdn.com/01c16c28/af3c7b981a7865e1f04e2140a0af30a9/v0/fs/4_bhk_independent_house-for-sale-gazipur_punjab-Zirakpur-others.jpg",
            rupees: "1.9 crore",
            title: "1 Kanal Designer House for Sale in Bahria Town Karachi",
            beds: "7 beds • 7 baths • 2 marla",
            location: "Bahria Town, Kaarchi",
            ago: "9 days ago"
        },
    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Houses
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {housesCards.map((a) => (
                    <Card
                        c_img={a.img}
                        c_rupees={a.rupees}
                        c_title={a.title}
                        c_text={a.beds}
                        c_location={a.location}
                        c_ago={a.ago}
                    />
                ))}
            </div>

        </div>
    )
}
