import Card from '../Card'

export default function Audios() {

    const audiosCards = [
        {
            img: "https://www.shoppingbag.pk/images/uploads/EZCAA_hoBekoxL_p.jpg",
            rupees: "8,000",
            title: "EasyCap Audio & Video Capture Device USB 2.0 with USB Dongle",
            location: "DHA Phase 2, Karachi",
            ago: "3 weeks ago"
        },
        {
            img: "https://images.olx.com.pk/thumbnails/527929122-240x180.jpeg",
            rupees: "10,000",
            title: "Audio and Video Products for Sale in Pakistan",
            location: "DHA Johar Town, Lahore",
            ago: "6 days ago"
        },
        {
            img: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dw4cebe2b8/images/hi-res/b/5383147d7ff5d4bb_AUC012btBK_SoundForm_Rhythm_Hero_WEB.jpg?sfrm=png",
            rupees: "6,000",
            title: "SoundForm Rhythm True Wireless Earbuds, 28hr playtime",
            location: "Executive Block, Lahore",
            ago: "2 weeks ago"
        },
        {
            img: "https://www.digimaxpakistan.com/cdn/shop/products/images_-_2023-03-29T132738.459.jpg?v=1680078474",
            rupees: "75,000",
            title: "Sony A7 iii Mirrorless Digital Camera CW",
            location: "Bahria Town, Kaarchi",
            ago: "9 days ago"
        },
    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Video-Audios
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {audiosCards.map((a) => (
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
