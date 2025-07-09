import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt='' className='
            rounded-full w-32'/>

            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi am Sunjo William  <Image src={assets.hand_icon} alt='' className='
             w-6'/></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Front end web developer base in London</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>I am a front end developer from California, USA with 10 years of experience with multiple companies like
                microsoft, Tesla and Apple
            </p>
            <div>
                <a href='#contact'>Contact Me <Image src={assets.right_arrow_white} alt='' className='
            w-4'/>
                </a>
                <a href='/sample-resume.pdf' download>My Resume <Image src={assets.download_icon} alt='' className='
            w-4'/>
                </a>
            </div>
        </div>
    )
}

export default Header