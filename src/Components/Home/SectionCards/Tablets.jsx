import Card from '../Card'

export default function Tablets() {

    const tabletsCards = [
        {
            img: "https://www.symbios.pk/image/cache/data/a/Android-4-0-Tablet-PC-Nextbook-Premium-7se-7-Inch-Capacitive-Touch-Screen-Dual-Core-CPU-plusbuyer_3-500x500.jpg",
            rupees: "50,000",
            title: "iPad / iPad 6, 7, 8, 9 Mini 5 Air1, 2, 3 / ipad Pro 12.9 inches / 2017",
            location: "DHA Phase 2, Karachi",
            ago: "4 weeks ago"
        },
        {
            img: "https://leyjao.pk/images/Husnain%20SEO/huawei-tab-banner.webp?1721641338890",
            rupees: "45,000",
            title: "Huawei Tablet 256 GB for Sale in Lahore",
            location: "DHA Johar Town, Lahore",
            ago: "3 days ago"
        },
        {
            img: "https://www.climaxcomputer.com/wp-content/uploads/2024/10/Samsung-Mobile-Galaxy-Tab-S10-Series-Samsungs-First-Galaxy-AI-Tablet_main1_F.jpg",
            rupees: "60,000",
            title: "Samsung tab A7lite box pack contact me for more Models",
            location: "Paragon City - Executive",
            ago: "3 weeks ago"
        },
        {
            img: "https://myshop.pk/pub/media/catalog/product/cache/badc1d10053babad93ba2ef2941284a4/l/e/lenovo_myshop-pk-6_1_1.jpg",
            rupees: "38,000",
            title: "Samsung Galaxy Tab A9, A9 plus 4/64, 8/128 Brand New Box Pack.",
            location: "Bahria Town, Kaarchi",
            ago: "5 days ago"
        },
    ]

    return (
        <div>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-6 sm:mt-8 mb-4 sm:mb-6'>
                <h2 className='text-xl sm:text-xl md:text-2xl font-bold text-gray mb-2 sm:mb-0'>
                    Tablets
                </h2>
                <button className='text-blue font-bold text-base sm:text-lg hover:underline cursor-pointer'>
                    View More
                </button>
            </div>

            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6'>
                {tabletsCards.map((a) => (
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
