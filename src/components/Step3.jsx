import React, { useState } from 'react'
import AddOns from '../helpers/AddOns';
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";

export default function Step3({ step, plans, setStep, addons, setAddons, handleAddOns }) {

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-[#022959] font-bold text-2xl xs:text-4xl">Pick add-ons</h3>
          <p className="text-[#9699AA] text-base">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="inputs flex flex-col gap-4">
          {addons.map((item, index) => {
            return (
              <div
                className={`border-[1px] px-3 sm:px-5 py-3 flex gap-2 sm:gap-6 rounded-lg items-center ${
                  item.clicked
                    ? "bg-[#F8F9FF] border-[#483EFF]"
                    : "border-[#D6D9E6] hover:border-[#483EFF]"
                } transition-all duration-200 cursor-pointer`}
                key={index}
                onClick={() => handleAddOns(item.title)}
              >
                <Checkbox.Root
                  className={`shadow-black/20 hover:bg-[#483EFF] flex h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] appearance-none items-center justify-center rounded-[4px] shadow-[0_2px_5px] outline-none ${
                    item.clicked ? "bg-[#483EFF]" : "bg-white"
                  } transition-all`}
                  checked={item.clicked}
                  onCheckedChange={() => handleAddOns(index)}
                >
                  <Checkbox.Indicator className="">
                    {item.clicked && <CheckIcon color="white" />}
                  </Checkbox.Indicator>
                </Checkbox.Root>

                <div className="flex-1">
                  <h1 className="font-sans font-normal text-sm sm:text-base text-[#022959]">
                    {item.title}
                  </h1>
                  <h6 className="font-sans font-normal text-xs sm:text-sm text-[#9699AA]">
                    {item.desc}
                  </h6>
                </div>

                <div>
                  <p className="text-[#483EFF] text-xs sm:text-sm">
                    {!plans[0].yearly
                      ? `$${item.price}/mo`
                      : `$${10 * item.price}/yr`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden xs:flex button-div justify-between mt-28">
        {step !== 0 && (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="text-[#164A8A] font-medium text-base hover:text-[#022959] transition-all"
          >
            Go back
          </button>
        )}
        <button
          className="bg-[#164A8A] font-medium text-base text-white px-5 py-2 rounded-lg self-end hover:bg-[#022959] transition-all"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
