import Layout from "../../components/dashboard/Layout";
import ArrowUpGreen from "../../../public/arrow-up-green.svg";
import Image from "next/image";
import Chart0 from "../../../public/chart0.svg";
import Chart1 from "../../../public/chart1.svg";
import SunIcon from "../../../public/sun-white.svg";
import Coin from "../../../public/coin.svg";
import Chart2 from "../../../public/chart2.svg"
import MTNICON from "../../../public/mtn-logo.svg";
import GlobalIcon from "../../../public/global.svg";
import DiscordIcon from "../../../public/discord.svg";
import SlackIcon from "../../../public/slack.svg";
import InstagramIcon from "../../../public/instagram.svg";
import CreditIcon from "../../../public/credit-notification.png";

export default function Dashboard() {

  const notifications = [
    { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' },
    { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' },
    { title: 'You have been paid', message: "$5,000 has been sent to your account", date: '13th February, 2024' }
  ];

  return (
    <Layout>
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <p className="text-3xl text-grayscale-header font-normal">
              Hi James 👋
            </p>
            <p className="text-[#667085] text-sm">
              Track, manage and monitor your jobs
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-grayscale-header">Job requests</p>
            <p className="rounded-full bg-primary bg-opacity-10 text-primary pr-1 pl-1">
              12
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
  <Image className="pt-10" src={Chart0} alt="Chart 0" />
  
  <div className="flex flex-col pb-10 space-y-4 justify-center items-center">
    <p className="text-[#101828] text-lg">Performance report</p>
    <p className="text-[#101828] text-[28px]">🎉 Excellent</p>
    
    <div className="flex text-sm gap-2 items-center">
      <Image src={ArrowUpGreen} alt="Arrow Up" />
      <span className="text-success-strong">20%</span>
      <span className="text-[#667085]">vs last month</span>
    </div>
  </div>
  
  <Image src={Chart1} alt="Chart 1" />
</div>


      <div className="flex flex-col md:flex-row gap-10">
  {/* Earnings Card */}
  <div className="md:w-1/3">
    <p className="text-lg font-medium text-[#101828] pb-6">Earnings</p>
    <div className="bg-grayscale-header rounded-3xl p-6">
      <div className="p-4 bg-grayscale-white bg-opacity-10 rounded-2xl w-fit">
        <Image src={Coin} alt="Coin Icon" />
      </div>
      <p className="pt-5 text-[38px] font-bold">
        <span className="text-primary">800</span>
        <span className="text-grayscale-label">/1,000</span>
        <span className="font-normal text-sm text-grayscale-placeholder ml-1">Dollars</span>
      </p>
      <p className="text-xs text-grayscale-placeholder">
        Based on your performance, your current<br />
        earning is 800 dollars
      </p>
      <div className="text-base pt-4 flex justify-between">
        <p>Earnings</p>
        <p>Current</p>
      </div>
    </div>
  </div>

  {/* Earnings Overview Chart */}
  <div className="flex-1">
    <p className="text-lg font-medium text-[#101828]">Earning overview</p>
    <Image src={Chart2} alt="Earnings Chart" />
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#101828] pt-10">
  {/* Active Jobs Section */}
  <div>
    <div className="pb-5 flex justify-between items-center">
      <p className="text-lg font-medium">Active jobs</p>
      <p className="text-sm font-medium">See all</p>
    </div>
    <div className="p-5 border rounded-2xl bg-grayscale-white space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image src={MTNICON} />
          <div>
            <p className="text-base font-semibold">MTN Nigeria</p>
            <div className="flex gap-1 items-center">
              <Image src={GlobalIcon} />
              <p className="text-sm text-grayscale-placeholder">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="flex items-center p-3 bg-grayscale-header_weak text-xs text-white rounded-full">
          <Image src={SunIcon} className="w-5 h-5 mr-2" alt="3pm - 11pm Icon" />
          3pm - 11pm
        </div>
      </div>

      <div>
        <p className="pb-2 text-base font-medium">Apps</p>
        <div className="flex space-x-5">
          <div className="flex gap-1 items-center">
            <Image src={DiscordIcon} />
            Discord
          </div>
          <div className="flex gap-1 items-center">
            <Image src={SlackIcon} />
            Slack
          </div>
          <div className="flex gap-1 items-center">
            <Image src={InstagramIcon} />
            Instagram
          </div>
        </div>
      </div>

      <div>
        <p className="text-base font-medium">Task</p>
        <p className="text-sm text-grayscale-label">
          Our commitment is backed by data-driven insights, ensuring continuous improvement and unparalleled support quality.
        </p>
      </div>

      <div>
        <p className="text-base font-medium">Performance</p>
        <Image src={Chart2} />
      </div>
    </div>
  </div>

  {/* Feedback and Notifications Section */}
  <div className="space-y-6">
    {/* Feedback Section */}
    <div>
      <div className="pb-5 flex justify-between items-center">
        <p className="text-lg font-medium">Feedback</p>
        <p className="text-sm font-medium">See all</p>
      </div>
      <div className="p-5 border rounded-2xl bg-grayscale-white space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">🎉</h1>
          <div className="px-3 py-1 rounded-full text-xs text-[#363F72] bg-[#F8F9FC]">
            15th Jan, 2023
          </div>
        </div>
        <div>
          <p className="text-base font-medium text-[#171A1C]">High Performer</p>
          <p className="text-xs text-grayscale-label">
          Keep up the outstanding work, James! We're constantly impressed by your dedication and efficiency. To further maximize your impact, consider taking on a mentorship role or exploring leadership opportunities within the team          </p>
        </div>
      </div>
    </div>

    {/* Notifications Section */}
    <div>
      <div className="pb-5 flex justify-between items-center">
        <p className="text-lg font-medium">Notifications</p>
        <p className="text-sm font-medium">See all</p>
      </div>
      <div className="space-y-5">
        {notifications.map((notification, index) => (
          <div key={index} className="p-2 border rounded-2xl bg-grayscale-white flex gap-5 items-center">
            <Image src={CreditIcon} className="w-20 h-20" />
            <div>
              <p className="text-base font-medium text-[#171A1C]">{notification.title}</p>
              <p className="text-sm text-grayscale-header">{notification.message}</p>
              <p className="text-xs text-grayscale-label">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


    </Layout>
  );
}
