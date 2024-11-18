import ServiceIcon1 from '../../../public/service-1.svg';
import ServiceIcon2 from '../../../public/service-2.svg';
import ServiceIcon3 from '../../../public/service-3.svg'; 
import Image from 'next/image';

export default function Services() {
    return (
        <div className="w-full mt-10 items-center p-10 sm:p-20 pb-0 sm:pb-0" id="services">
            <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5"> 
                <p className="text-grayscale-white">💬 ️  Our Services</p>
            </div>

            <div className="grid  grid-cols-1   lg:grid-cols-3 gap-5">
      <div className="bg-[#FCFCFC] p-10 space-y-3 rounded-3xl">
                    <Image
        src={ServiceIcon1}
         />
        <p className="font-medium text-xl text-grayscale-header pt-5">Social Media Support</p>
        <p className="text-grayscale-placeholder text-lg">Our agents manage the support aspect of your firm&apos;s social media accounts, such as Discord, Instagram, Facebook, Twitter, and more. They handle client inquiries, engage with your community, and ensure timely responses to maintain a positive online presence.</p>

        </div>

        <div className="bg-[#FCFCFC] p-10 space-y-3 rounded-3xl">
                    <Image
        src={ServiceIcon2}
         />
        <p className="font-medium text-xl text-grayscale-header pt-5">Live Chat Support</p>
        <p className="text-grayscale-placeholder text-lg">We offer 24/7 live chat support with skilled agents ready to assist your clients in real time. Whether it’s answering questions, or providing information, our agents ensure that your clients receive immediate and effective assistance.</p>

        </div>

        <div className="bg-[#FCFCFC] p-10 space-y-3 rounded-3xl">
                    <Image
        src={ServiceIcon3}
         />
        <p className="font-medium text-xl text-grayscale-header pt-5">Email Support</p>
        <p className="text-grayscale-placeholder text-lg">Our dedicated email support team is committed to managing your firm’s inbox efficiently. We ensure prompt responses to all inquiries, helping to maintain strong communication with your clients while preventing any messages from going unanswered.</p>

        </div>
 
    </div>

        </div>
    )
}