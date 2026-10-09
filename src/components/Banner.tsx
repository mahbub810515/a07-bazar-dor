'use client'

import { Button } from "@heroui/react"
import Image from "next/image"
import banner from "@/../public/bazar-hero.png"

const Banner = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    })
    return (
        <div className="container mx-auto my-10 bg-white rounded-2xl flex justify-between ">
            <div className="p-10">
                <h2 className="max-w-55 rounded-2xl text-green-500 bg-green-50 mb-2 p-2">{date}</h2>
                <h1 className="font-bold text-4xl">আজকের বাজারের দাম এক নজরে</h1>
                <p className="my-5">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- <br />সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <Button className={'bg-green-500'}>সব পণ্য দেখুন</Button>
            </div>
            <div>
                <Image src={banner} width={500} height={500} alt="banner" />
            </div>
        </div>
    )
}

export default Banner