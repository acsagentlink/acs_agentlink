import Image from 'next/image'
import HeroSubSectionImage from '.././../../public/hero-subsection-img.svg'
import RocketIcon from '../../../public/rocket-icon.png'

export default function HeroSubSection() {
    return (
        <div className="w-full mt-28 items-center">
            <div className="flex flex-col sm:flex-row gap-5 px-10 sm:items-stretch">
                <div className="sm:w-1/3 min-h-[300px] flex-shrink-0">
                    <Image
                        src={HeroSubSectionImage}
                        priority={true}
                        className="rounded-[34px] h-full object-cover"
                    />
                </div>

                <div className="sm:w-2/3 bg-primary bg-opacity-5  rounded-[34px] p-5 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                        <Image
                            src={RocketIcon}
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                    </div>
                    <p className="text-grayscale-header_weak font-medium text-base sm:text-lg md:text-xl lg:text-3xl leading-relaxed">
                        At A.C.S AgentLink, we understand that exceptional customer 
                        support is critical for the success of any proprietary trading
                        firm. We provide highly experienced support agents who 
                        specialize in delivering top-notch customer service across all 
                        key platforms. Whether it’s handling customer inquiries on 
                        your firm social media accounts, managing live chat 
                        interactions, or responding to emails, our team ensures
                        smooth customer support operations. This allows you to focus 
                        on trading operations, growth, and other key business 
                        priorities, while we take care of your client support needs.
                    </p>
                </div>
            </div>
        </div>
    )
}