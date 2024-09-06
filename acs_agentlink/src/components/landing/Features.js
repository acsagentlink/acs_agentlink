import FeatureIcon1 from '../../../public/feature-1.svg'
import Image from 'next/image';

export default function Features() {
    return (
        <div className="w-full mt-10 items-center p-20">
            <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5"> 
                <p>🤙️ Why hire our support agents</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Image
                src={FeatureIcon1}
                />
      <div className="border border-grayscale-line p-4">Item 1</div>
      <div className="border border-grayscale-line p-4">Item 2</div>
      <div className="border border-grayscale-line p-4">Item 3</div>
      <div className="border border-grayscale-line p-4">Item 4</div>
    </div>

        </div>
    )
}