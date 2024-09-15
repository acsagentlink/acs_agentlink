import { useFormContext } from 'react-hook-form';
import PropFirmIcon from '../../../public/prop-icon.svg';
import ForexIcon from '../../../public/forex-icon.svg';
import CryptoIcon from '../../../public/crypto-icon.svg';
import EcommerceIcon from '../../../public/ecommerce-icon.svg';
import Image from 'next/image';

export default function Step1() {
  const { register, setValue, watch, formState: { errors } } = useFormContext();

  const selectedType = watch('type');

  const handleTypeSelection = (value) => {

    setValue('type', value, { shouldValidate: true });
  };

  return (
    <>
    <h2 className='text-2xl mb-4'>What firm do you want to work for?</h2>
    <div className="space-y-5">
        <CardItem
          icon={PropFirmIcon}
          title="Prop firm"
          description="Assist high-performing firms with customer support"
          value="1" // Value to pass when selected
          selected={selectedType === "1"} // Check if this option is selected
          onSelect={handleTypeSelection}
        />
        <CardItem
          icon={ForexIcon}
          title="Crypto exchange"
          description="Provide customer support for navigating the crypto market"
          value="2"
          selected={selectedType === "2"}
          onSelect={handleTypeSelection}
        />
        <CardItem
          icon={CryptoIcon}
          title="Forex broker"
          description="Offer account and trading platform support to forex traders"
          value="3"
          selected={selectedType === "3"}
          onSelect={handleTypeSelection}
        />
        <CardItem
          icon={EcommerceIcon}
          title="E-commerce website"
          description="Help customers with order inquiries, product issues, and returns"
          value="4"
          selected={selectedType === "4"}
          onSelect={handleTypeSelection}
        />

        {/* Hidden input to register the selected service */}
        <input type="hidden" {...register('type', { required: "Please select one" })} />

        {/* Error message for validation */}
        {errors.type && <p className='text-red-500'>{errors.type.message}</p>}
      </div>
    </>
  );
}

const CardItem = ({ icon, title, description, value, selected, onSelect }) => {
    return (
      <div
        className={`flex items-center p-4 border rounded-lg mb-4 cursor-pointer ${
          selected ? "bg-primary bg-opacity-5 border-primary" : "bg-white border-grayscale-input"
        }`}
        onClick={() => onSelect(value)} // Call onSelect with value
      >
        <div className="flex-shrink-0">
          <Image src={icon} className="w-8 h-8 text-gray-800" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-grayscale-header">{title}</h3>
          <p className="text-sm text-grayscale-placeholder">{description}</p>
        </div>
      </div>
    );
  };
