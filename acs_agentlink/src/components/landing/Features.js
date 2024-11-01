import FeatureIcon1 from '../../../public/feature-1.svg';
import FeatureIcon2 from '../../../public/feature-2.svg';
import FeatureIcon3 from '../../../public/feature-3.svg';
import FeatureIcon4 from '../../../public/feature-4.svg';
import FeatureIcon5 from '../../../public/feature-5.svg';
import FeatureIcon6 from '../../../public/feature-6.svg';
import FeatureIcon7 from '../../../public/feature-7.svg';
import Image from 'next/image';

export default function Features() {
    return (
        <div className="w-full mt-10 items-center p-10 sm:p-20 pb-0 sm:pb-0" id="features">
            <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5"> 
                <p className="text-grayscale-white">⭐️️ Why Choose A.C.S AgentLink?</p>
            </div>

            <div className="grid     lg:grid-cols-2 gap-10">
      <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon1}
       width={250}
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">Exclusive Focus on <br></br>Proprietary Trading Firms</p>
        <p className="text-grayscale-placeholder text-xl">A.C.S AgentLink specializes in providing customer support agents for proprietary trading firms. We understand the importance of accurate, and timely responses, as well as the need for confidentiality and efficient communication in your industry.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon2}
        width={250}
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">Highly Experienced <br></br>Support Agents</p>
        <p className="text-grayscale-placeholder text-xl">We don’t just offer generic customer support. Our agents are experienced professionals with a deep understanding of customer service best practices. They’ve worked with a variety of platforms, and know how to handle inquiries efficiently, ensuring your clients get quick, and accurate responses.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon3}
        width={250} 
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">Multi-Platform Expertise</p>
        <p className="text-grayscale-placeholder text-xl">Our agents are equipped to manage customer interactions across multiple platforms, such as social media (Discord, Instagram, Facebook, Twitter, and more), live chat, and email. Whether it's responding to inquiries, or maintaining active communication, we ensure consistent support across all channels.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon4}
        width={250}
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">24/7 Availability</p>
        <p className="text-grayscale-placeholder text-xl">Trading doesn’t stop, and neither do we. A.C.S AgentLink offers round-the-clock support, ensuring that your clients receive assistance whenever they need it, regardless of time zones, or trading hours. This gives you peace of mind, knowing your firm is always responsive.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon5}
        width={250}
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">Cost-Effective, and <br></br>Scalable Solutions</p>
        <p className="text-grayscale-placeholder text-xl">Maintaining a full-time, in-house support team can be costly, and challenging, especially for growing firms. With A.C.S AgentLink, you gain access to a flexible support system that can scale with your business without the overhead of recruitment, training, or management.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon6}
        width={250}
        />
        <p className="font-medium text-2xl text-grayscale-header pt-5">Seamless Integration <br></br>with Your Processes</p>
        <p className="text-grayscale-placeholder text-xl">Our support agents seamlessly integrate into your firm’s existing operations. They adapt to your specific processes, tools, and platforms, ensuring a smooth transition, and a hassle-free experience for both your team, and your clients.</p>

        </div>

        <div className="flex flex-col md:flex-row  border border-grayscale-line p-10 space-y-3 rounded-3xl sm:col-span-2 md:col-span-2 lg:col-span-2  justify-center">
                    <Image src={FeatureIcon7} width={250} />
                    <div className=' '>
                                           <p className="font-medium text-2xl text-grayscale-header pt-5">Reliability and Efficiency</p>
                    <p className="text-grayscale-placeholder pt-5 text-xl">With our team of dedicated agents, you can rely on us to deliver prompt, and accurate customer service,  improving client satisfaction, and reducing any potential disruptions. Our efficiency helps keep your firm’s support operations running smoothly, allowing you to maintain a professional, and responsive image.</p> 
                    </div>

                </div>
    </div>

        </div>
    )
}