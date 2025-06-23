import Card from '../Card'

export default function Jobs() {

    const jobCards = [
        {
            img: "https://marketplace.canva.com/EAFlCJ4-No4/1/0/1600w/canva-blue-yellow-minimalist-geometry-hiring-instagram-post-p3F4cPeQ_Q0.jpg",
            title: "Data Entry Job / Typing Job / Assignment Job / Online Job",
            location: "DHA Phase 2, Karachi",
            ago: "3 weeks ago"
        },
        {
            img: "https://media.sproutsocial.com/uploads/2022/07/Screen-Shot-2022-07-29-at-4.05.46-PM.png",
            title: "Assignment Job / Part Time Job / Job for male and female",
            location: "DHA Johar Town, Lahore",
            ago: "6 days ago"
        },
        {
            img: "https://as1.ftcdn.net/v2/jpg/04/41/57/38/1000_F_441573829_nx6uh3TG85bypRkzu5IWTUSxSdO0gIJP.jpg",
            title: "Data Entry Job / Typing Job / Assignment Job / Online Job",
            location: "Paragon City - Gujranwala",
            ago: "2 weeks ago"
        },
        {
            img: "https://png.pngtree.com/png-clipart/20200105/ourlarge/pngtree-we-are-hiring-post-png-image_2111779.jpg",
            title: "Farmer Jobs - Males & Females Jobs - Jobs In Chakwal ",
            location: "Bahria Town, Karchi",
            ago: "9 days ago"
        },
    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Jobs
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {jobCards.map((a) => (
                    <Card
                        c_img={a.img}
                        c_rupees={a.title}
                        c_location={a.location}
                        c_ago={a.ago}
                    />
                ))}
            </div>

        </div>
    )
}
