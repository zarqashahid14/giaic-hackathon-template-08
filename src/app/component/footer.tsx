import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';



export default function Footer(){
    return(
        <div >
            <div className="w-[100%] h-[300px] bg-[#E1E3E5]">
            <div className="flex gap-10 w-[90%] xl:w-[70%]  mx-auto py-[40px]">
            <div>
                <div className='flex gap-2'>
                <Image
                 src="/logo.png" 
                 alt="logo of website"
                   className='w-[32px] h-[36px] mt-[2px]'
                   width={32}
                   height={36}/>
                <h2 className='text-[#272343] text-[26px]'>Comporty</h2>
                </div>
                <p className="text-[13px] lg:text-[16px] my-[30px] sm:w-[180px] lg:w-[250px] h-[72px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </p>
                <div className='ml-3'>
                <div className="flex sm:gap-3 lg:gap-6">
                    <FontAwesomeIcon icon={faFacebook} className='w-[22px] h-[22px] hover:bg-[#007580]' />
                    <FontAwesomeIcon icon={faTwitter} className='w-[22px] h-[22px] hover:bg-[#007580]' />
                    <FontAwesomeIcon icon={faInstagram} className='w-[22px] h-[22px] hover:bg-[#007580]' />
                    <FontAwesomeIcon icon={faLinkedin} className='w-[22px] h-[22px] hover:bg-[#007580]'/>
                    <FontAwesomeIcon icon={faYoutube} className='w-[22px] h-[22px] hover:bg-[#007580]' />
                </div>
                </div>
              
            </div>
            <div className="sm:w-[250px] lg:w-[350px]">
                <h2 className='w-[82px] font-bold text-[#9A9CAA] font-sans mb-[30px]'>Category</h2>
                <ul className='list-none text-[13px] lg:text-[15px] cursor-pointer'>
                    <li className='text-[#272343]  hover:text-[#007580]'>Sofa</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Armchair</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Wing Chair</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Desk Chair</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>wooden Chair</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Park Bench</li>
                </ul>
            </div>
           
            <div className=" sm:w-[250px] lg:w-[350px]">
                <h2 className='w-[82px] font-bold text-[#9A9CAA] font-sans mb-[30px]'>Support</h2>
                <ul className='list-none text-[13px] lg:text-[15px] cursor-pointer'>
                    <li className='text-[#272343]  hover:text-[#007580]'>Help & Support</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Tearms & Conditions</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Privacy Policy</li>
                    <li className='text-[#272343]  hover:text-[#007580]'>Help</li>

                </ul>
            </div>
            <div>
                <h2 className='w-[82px] font-bold text-[#9A9CAA] font-sans mb-[20px]'>Newsletter</h2>
                <div className='my-8'>
                    <input type="text" placeholder='your Email' className='w-[160px] h-[38px] lg:w-[245px] lg:h-[46px] mb-[10px] rounded-[5px] px-2 mr-2' />
                    <button  className='bg-[#029FAE] hover:shadow-[0px_0px_5px_#029FAE] text-[#FFFFFF] w-[127px] h-[46px] rounded-[8px] text-center'>Subscribe</button>
                </div>
                <p className='text-[13px] lg:text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
            </div>
            </div>
            <div className="w-[100%] h-[50px] bg-[#FFFFFF]" >
            <div className='text-center w-[90%] xl:w-[70%] mx-auto py-[10px]'>
                <p className='text-[15px] font-bold text-[#7b7c7c]'>&copy;2021 - Blogy - Designed & Develop by Zakirsoft</p>
            </div>
            </div>

        </div>
       
        
    )
}