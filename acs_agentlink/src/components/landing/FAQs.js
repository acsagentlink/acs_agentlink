"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const [activeItem, setActiveItem] = useState(null);

  const handleValueChange = (value) => {
    setActiveItem(value);
  };

  return (
    <div className="w-full mt-8 p-5 sm:p-20 pb-0 sm:pb-0 max-w-7xl mx-auto" id="faqs">
      <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5">
        <p className="text-grayscale-white">📝 ️   Frequently asked questions</p>
      </div>

      <div className="flex-col bg-grayscale-background rounded-tl-3xl rounded-tr-3xl sm:p-20 space-y-5">
        <div
          className={`border-2 ${
            activeItem === "item-1" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#170F49]">
              What type of companies does A.C.S AgentLink work with? 
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              We specialize in providing customer support services exclusively for proprietary trading firms.

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-2" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#170F49]">
               What services does A.C.S AgentLink provide?  

              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              Our customer support services cover live chat, email support, and the management of social media platforms like Discord, Instagram, Facebook, Twitter, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-3" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#170F49]">
              How do I hire an agent from A.C.S AgentLink?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              Hiring an agent is easy. Simply click on the “Hire an Agent button on our website, complete the form, and submit it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-4" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#170F49]">
              Are A.C.S AgentLink agents trained for customer support?  
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              All of our agents come with extensive experience in providing customer support, especially in the proprietary trading industry, ensuring they meet the high standards of your firm.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-5" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#170F49]">
              Do your agents work 24/7?  
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              Yes, our agents provide 24/7 support, ensuring that no matter when your clients need assistance, they receive timely, and reliable service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-6" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-[#170F49]">
              What platforms do your agents support? 
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              Our agents manage support on social media platforms such as Discord, Instagram, Facebook, Twitter, and more, as well as through live chat, and email.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-7" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-[#170F49]">
              What if I have special requirements for my firm&apos;s customer support?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              We understand that each proprietary trading firm is unique. During the hiring process, we will discuss any specific needs or custom requirements to ensure that the agents provided are a perfect fit for your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-8" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-[#170F49]">
              How can I apply to become an agent with A.C.S AgentLink?  
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              Simply click on the &quot;Become an Agent&quot; button on our website, fill out the application form, and submit it for review.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-9" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-[#170F49]">
              How quickly can I have agents ready for my firm?  
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              We focus on getting your agents onboard quickly based on your needs. After we finalize the details, we will promptly prepare, and integrate your dedicated agents into your team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={`border-2 ${
            activeItem === "item-10" ? "border-primary" : "sm:border-none"
          } bg-white rounded-xl p-5 transition-all duration-300`}
        >
          <Accordion
            type="single"
            collapsible
            value={activeItem}
            onValueChange={handleValueChange}
          >
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-[#170F49]">
              Is there a minimum, or maximum number of agents I can hire?  
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
              We offer flexibility based on your firm’s needs. Whether you require just one agent, or a full support team, we can accommodate your demands, scaling as your business grows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
