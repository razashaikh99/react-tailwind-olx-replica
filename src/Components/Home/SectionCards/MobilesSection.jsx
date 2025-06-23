import Card from '../Card'

export default function MobilesSection() {

    const mobilesCards = [
        {
            img: "https://blog.olx.com.pk/wp-content/uploads/2022/02/Mobile-phones-1.jpg",
            rupees: "120,000",
            title: "Iphones (6GB / 128GB) PTA Approved For Sale",
            location: "Gulshan e Iqbal, Karachi",
            ago: "2 weeks ago"
        },
        {
            img: "https://www.cnet.com/a/img/resize/b84fd97fe29bbe2ec4d397caf63db53bf8bea241/hub/2022/03/30/e841545d-e55c-47fc-b24a-003bf14e58c8/oneplus-10-pro-cnet-review-12.jpg?auto=webp&fit=crop&height=900&width=1200",
            rupees: "80,0000",
            title: "Samsung S22 Ultra (8GB / 256GB) PTA Approved",
            location: "Johar Town, Lahore",
            ago: "3 days ago"
        },
        {
            img: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png?w=1080",
            rupees: "200,000",
            title: "Google Pixel 8 (12GB / 512GB) Patch Approved",
            location: "Gulberg Town, Islamabad",
            ago: "4 weeks ago"
        },
        {
            img: "https://i.ytimg.com/vi/JkRXhe3KaPE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZw98Svj4VOuLy178RazpvG0SGtw",
            rupees: "140,000",
            title: "Iphones & Andriod Phones For Sale PTA Approved",
            location: "Model Link Road, Kashmir",
            ago: "5 days ago"
        },

    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Mobile Phones
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {mobilesCards.map((a) => (
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
