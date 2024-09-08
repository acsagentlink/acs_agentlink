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
    <div className="w-full m-0 items-center sm:mt-0 mt-8 p-10 sm:p-20 sm:pb-0">
      <div className="w-fit bg-grayscale-header rounded-full mb-10 p-5">
        <p className="text-grayscale-white">💬 Frequently asked questions</p>
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                How do I hire agents on A.C.S Agent Link?
              </AccordionTrigger>
              <AccordionContent className="text-grayscale-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
}
