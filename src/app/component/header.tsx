import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
    return(
        <div>
            <div className="w-[100%] bg-[#272343] h-[45px]">
                <div className="flex justify-between w-[90%] xl:w-[70%] mx-auto my-auto pt-[14px] pb-[14px]">
                    <div className="text-[#FFFFFF] flex gap-1">
                    <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px] mt-1 '/>
                    <p>Free shipping on all orders over $50</p>
                    </div>
                    <ul className='flex gap-5 text-[#FFFFFF]'>
                        <li className='flex gap-1'>Eng 
                            <Image
                            src="/group.svg"
                            alt="drop down"
                            className='w-[20px] h-[20px] mt-[2px]'
                            width={20}
                            height={20}
                            priority
                            />
                            </li>
                        <li><Link href="/Faq">Faqs</Link></li>
                        <li className='flex gap-1'>
                            <Image
                             src="/error.svg" 
                             alt="error" 
                             className='w-[20px] h-[20px] mt-[2px]'
                             width={20}
                             height={20}
                             priority />Need help</li>
                    </ul>

                </div>
            </div>
            <div className='w-[100%] bg-[#F0F2F3] h-[84px]'>
                <div className='flex justify-between w-[90%] xl:w-[70%] mx-auto pt-[20px] pb-[20px]'>
                    <div className='flex gap-2'>
                    <Image
                    src="/logo.png" 
                    alt="logo of website"  
                    className='w-[32px] h-[36px] mt-[2px]'
                    width={32}
                    height={36}
                    priority
                    />
                    <h2 className='text-[#272343] text-[26px]'>Comporty</h2>
                    </div>
                    <Link href="/Cart">
                    <button className='flex gap-2 bg-[#FFFFFF] py-[10px] px-[12px] text-[#272343] border-none rounded-[6px] w-[120px] h-[44px] '>
                        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
                        cart
                        <img src="/No.png" alt="no icon" className='w-[22px] h-[22px]'/>
                    </button>
                    </Link>
                </div>
            </div>
            <div className='w-[100%] bg-[#FFFFFF] h-[74px]'>
                <div className='flex justify-between w-[90%] xl:w-[70%] mx-auto  pt-[20px] pb-[20px] '>
                    <ul className='flex gap-4 list-none font-bold text-[15px]'>
                        <li className='text-[#636270] hover:text-[#007580]'><Link href="/">Home</Link></li>
                        <li className='text-[#636270] hover:text-[#007580]'><Link href="#">Shop</Link></li>
                        <li className='text-[#636270] hover:text-[#007580]'><Link href="/product">Product</Link></li>
                        <li className='text-[#636270] hover:text-[#007580]'><Link href="#">Pages</Link></li>
                        <li className='text-[#636270] hover:text-[#007580]'><Link href="/About">About</Link></li>
                    </ul>
                    <ul className='list-none font-bold flex text-[#636270] text-[14px]'>
                        <li className='text-[#636270]'><Link href="/Contact">Contact:</Link></li>
                        <li className='text-[#272343]'>(808) 555-0111</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}