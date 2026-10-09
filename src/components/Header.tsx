
import { NavItemType } from '@/types/NavItemType';
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link';


const Header =async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    const data = await res.json();
        

    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    })


    return (
        <div className='bg-green-50'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image className='bg-green-500 w-10 h-10 rounded p-2' src={'/logo-icon.png'} alt='logo' height={50} width={50} />
                    <div>
                        <h1 className='font-bold text-4xl'>বাজার দর</h1>
                        <p className='font-normal text-sm'>{date}</p>
                    </div>
                </Link>
                <div className='flex gap-2'>
                    <Button className={`bg-green-500`}>সাইন ইন</Button>
                    <Button>সাইন আপ</Button>
                </div>
            </div>
            <hr className="border-t border-gray-200 my-2" />
            <div className='container mx-auto flex gap-3'>
                {data.map((navItem:NavItemType)=><Link href={navItem.slug} key={navItem.id}>
                    <span className="text-xl">{navItem.icon}</span>
                    <span className='text-xl'>{navItem.nameBn}</span>
                </Link>)}
            </div>
            <hr className="border-t border-gray-200 my-2" />
        </div>
    )
}

export default Header