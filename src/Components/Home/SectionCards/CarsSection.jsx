import Card from '../Card'

export default function CarsSection() {

    const carsCards = [
        {
            img: "https://cfsm-image-service.s3.amazonaws.com/resized-andsnajeepenus2025wranglergallerydesktopmy25jeepwranglergallery01exteriordesktopjpgimage2880jpg",
            rupees: "90 Lacs",
            title: "Used Car Dealer serving Austin TX For Sale",
            km: "20,500km • 2022",
            location: "Gulshan e Iqbal, Karachi",
            ago: "2 weeks ago"
        },
        {
            img: "https://di-uploads-pod43.dealerinspire.com/gerrylanechryslerdodgejeepram/uploads/2024/09/kenny-eliason-yDekvyZ52dU-unsplash-1-1024x620.jpg",
            rupees: "1.2 crore",
            title: "Used Jeep Wrangler for Sale Near Frankfort 2023",
            km: "20,500km • 2022",
            location: "Johar Town, Lahore",
            ago: "3 days ago"
        },
        {
            img: "https://scprestigecars.co.uk/wp-content/uploads/bb-plugin/cache/Specialist-glass2-4-1024x768-landscape-4c554835709788cb402da57c124bf35d--landscape-23d0bc7cb3a9f07d714d3ae5977e0edb-g06wui2kl4zn.jpg",
            rupees: "2.1 crore",
            title: "SC Prestige Cars | Specialist Car Dealers For Sale",
            km: "20,500km • 2022",
            location: "Gulberg Town, Islamabad",
            ago: "4 weeks ago"
        },
        {
            img: "https://d3s8goeblmpptu.cloudfront.net/mrp/land-rover/2022/defender/2022-land-rover-defender_landing-2.jpg",
            rupees: "90 lacs",
            title: "Land Cover Car For sale 2022 Model in Karachi",
            km: "20,500km • 2022",
            location: "Model Link Road, Kashmir",
            ago: "5 days ago"
        },

    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Cars
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {carsCards.map((a) => (
                    <Card
                        c_img={a.img}
                        c_rupees={a.rupees}
                        c_title={a.title}
                        c_text={a.km}
                        c_location={a.location}
                        c_ago={a.ago}
                    />
                ))}
            </div>

        </div>
    )
}
