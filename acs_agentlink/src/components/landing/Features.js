import FeatureIcon1 from '../../../public/feature-1.svg';
import FeatureIcon2 from '../../../public/feature-2.svg';
import FeatureIcon3 from '../../../public/feature-3.svg';
import FeatureIcon4 from '../../../public/feature-4.svg';
import Image from 'next/image';

export default function Features() {
    return (
        <div className="w-full mt-10 items-center p-10 sm:p-20 pb-0 sm:pb-0">
            <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5"> 
                <p className="text-grayscale-white">🤙️ Why hire our support agents</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 grid-cols-1">
      <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon1}
        />
        <p className="font-bold text-xl text-grayscale-header pt-5">Platform Proficiency</p>
        <p className="text-grayscale-placeholder">Our agents bring unparalleled expertise to your favorite collaboration spaces.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon2}
        
        />
        <p className="font-bold text-xl text-grayscale-header pt-5">Proactive Issue Resolution</p>
        <p className="text-grayscale-placeholder">Our agents anticipate issues and provide 24/7 support, ensuring a seamless community experience.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon3}
        width={260}
        height={230}
        />
        <p className="font-bold text-xl text-grayscale-header pt-5">Data-Driven Insights</p>
        <p className="text-grayscale-placeholder">Our commitment is backed by data-driven insights, ensuring continous improvement and unparalledled support quality.</p>

        </div>

        <div className="border border-grayscale-line p-10 space-y-3 rounded-3xl">
                    <Image
        src={FeatureIcon4}
        width={260}
        height={230}
        />
        <p className="font-bold text-xl text-grayscale-header pt-5">Community Engagement Boost</p>
        <p className="text-grayscale-placeholder">Our agents not only support but actively contribute to elevating your community engagement.</p>

        </div>
    </div>

        </div>
    )
}