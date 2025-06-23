import React from 'react'
import addImg from "../../assets/images/add-img.png"

export default function AdvertiseImg() {
    return (
        <div>
            <div className='my-10 flex justify-center cursor-pointer'>
                <img
                    className='w-[1000px]'
                    src={addImg}
                    alt=""
                />
            </div>
        </div>
    )
}
