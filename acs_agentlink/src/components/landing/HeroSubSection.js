import Image from 'next/image'
import HeroSubSectionImage from '.././../../public/hero-subsection-img.png'
import RocketIcon from '../../../public/rocket-icon.png'

export default function HeroSubSection() {
    return (
        <div className="w-full mt-28 items-center">
            <div className="sm:flex space-y-5 sm:space-y-0 md:space-y-0 gap-5 px-10">
                <div className='md:w-[65%]'>
                     <Image
                src={HeroSubSectionImage}
                priority={true}
                className='rounded-[50px]'
                />
                </div>
                   
                
                <div className='md:w-[35%] bg-primary bg-opacity-5 rounded-[50px] p-5'>
                    <Image
                    src={RocketIcon}
                    width={40}
                    height={40}
                    />
                    <p className='text-grayscale-header_weak mt-4 font-medium text-2xl sm:text-sm md:text-lg lg:text-3xl sm:leading-relaxed md:leading-relaxed'>
                    Community support meets<br></br>excellence!<br></br> 
                    <span className='text-primary'> Supercharge your prop firm</span><br></br>by hiring skilled support agents who understand the pulse of platforms like Discord and Slack.
                    </p>
                </div>
            </div>
        </div>
    )
}