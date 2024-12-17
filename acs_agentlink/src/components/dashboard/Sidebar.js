"use client"

import { useRouter, usePathname } from 'next/navigation';
import DashboardIcon from '../../../public/dashboard-icon.svg';
import JobIcon from '../../../public/job-icon.svg';
import PaymentIcon from '../../../public/payment-icon.svg';
import AnalyticsIcon from '../../../public/analytics-icon.svg';
import ContractIcon from '../../../public/contract-icon.svg';
import KycIcon from '../../../public/kyc-icon.svg';
import NotificationIcon from '../../../public/notification-icon.svg';
import SettingIcon from '../../../public/setting-icon.svg';
import Logo from '../../../public/logo-black.svg';
import UserAvatar from '../../../public/Avatar.svg';
import Image from 'next/image';
import { Button } from '../ui/button';
import LogoutIcon from '../../../public/logout.svg';
import { deleteCookie } from 'cookies-next';
import { useUser } from "../../context/UserContext";

const Sidebar = () => {
  const user = useUser();

  const router = useRouter();
  const currentRoute = usePathname();

  const Logout = () => {
    deleteCookie('token'); // Remove the token
    // router.push('/login'); // Redirect to login
    window.location.href = "/login";
  }
  const menuItems = [
    { name: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
    { name: 'My Jobs', icon: JobIcon, path: '/dashboard/jobs' },
    { name: 'Payment', icon: PaymentIcon, path: '/dashboard/payment' },
    { name: 'Analytics', icon: AnalyticsIcon, path: '/dashboard/analytics' },
    { name: 'Contract', icon: ContractIcon, path: '/dashboard/contract' },
    { name: 'KYC Verification', icon: KycIcon, path: '/dashboard/kyc' },
    { name: 'Notifications', icon: NotificationIcon, path: '/dashboard/notifications' },
  ];

  const settingsItems = [
    { name: 'Settings', icon: SettingIcon, path: '/dashboard/settings' }
    ];

      // Conditional rendering to prevent errors if user is null
  if (!user) {
    return (
      <div className="h-screen bg-white hidden sm:flex flex-col justify-between w-72 border-r border-[#EAECF0]">
        <div className="p-8">
          <p>Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="h-screen bg-white hidden sm:flex flex-col justify-between w-72 border-r border[#EAECF0]">
      <div>
         <div className="p-8">
        <Image src={Logo} />
      </div>

       <nav className='p-6'>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`flex items-center cursor-pointer p-2 hover:bg-[#F9FAFB] rounded-lg ${
                currentRoute === item.path ? 'bg-[#F9FAFB] text-grayscale-header' : 'text-grayscale-label'
              }`}
            >
              <Image src={item.icon} className="mr-3" alt={`${item.name} Icon`}/>
              {item.name}
            </li>
          ))}
        </ul>

      </nav>
      </div>
     
    <div className='p-6 border-t border[#EAECF0]'>
<nav className='mb-6'>
        <ul>
          {settingsItems.map((item) => (
            <li
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`flex items-center cursor-pointer p-2 hover:bg-[#F9FAFB] rounded-lg ${
                currentRoute === item.path ? 'bg-[#F9FAFB] text-grayscale-header' : 'text-grayscale-label'
              }`}
            >
              <Image src={item.icon} className="mr-3" alt={`${item.name} Icon`}/>
              {item.name}
            </li>
          ))}
        </ul>

      </nav>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/storage` + user.image}
          alt="User Avatar"
          width={40}
          height={40}
          className='rounded-full'
          />
          <div className='ml-3'>
            <p className='text-sm font-semibold text-grayscale-header'>                {user.name}
            </p>
            <p className='text-xs text-grayscale-label'>{user.email}</p>
          </div>
        </div>
        <Button
      
        onClick={() => Logout()}
        className="flex items-center p-2 text-grayscale-label hover:text-grayscale-header bg-white"
        >
          <Image src={LogoutIcon} alt="Logout Icon" width={18} height={18}/>
        </Button>
      </div>
    </div>

      
    </div>
  );
};

export default Sidebar;
