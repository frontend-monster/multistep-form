import React, { useEffect, useState } from "react";
import { iconArcade, iconAdvanced, iconPro } from "../assets";
import SwitchDemo from "../helpers/Switch";

const images = [iconArcade, iconAdvanced, iconPro]
export default function Step2({
  plans,
  setYearly,
  handlePlanChecked,
  step,
  setStep,
  checkedChange,
  setcheckedChange
}) {
  useEffect(() => {
    setYearly(checkedChange);
  }, [checkedChange]);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 mb-4 sm:mb-12">
          <h3 className="text-[#022959] font-bold text-2xl xs:text-4xl">
            Select your plan
          </h3>
          <p className="text-[#9699AA] text-base">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-2 sm:gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              id={plan.type}
              onClick={() => handlePlanChecked(plan.type)}
              className={`flex sm:flex-col items-center sm:items-start sm:justify-between border-[1px] rounded-xl pl-3 pr-10 py-3 gap-3 sm:gap-0 cursor-pointer ${
                plan.active
                  ? "bg-[#F8F9FF] border-[#483EFF]"
                  : "bg-white text-[#022959] hover:border-[#483EFF] border-[#D6D9E6]"
              } transition-all`}
            >
              <img
                src={images[index]}
                alt=""
                className="w-9 h-9 object-contain sm:mb-10"
              />
              <div className="flex flex-col">
                <h3 className="font-sans font-medium text-base">
                  {plan.type}
                </h3>
                <p className="text-[#9699AA] text-sm font-sans font-normal  ">{`$${
                  plan.yearly
                    ? `${10 * plan.monthlyPrice}/yr`
                    : `${plan.monthlyPrice}/mo`
                }`}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex bg-[#F8F9FF] p-4 gap-2 justify-center items-center rounded-lg">
          <p
            className={`text-sm font-sans font-normal ${
              !checkedChange ? "text-[#022959]" : "text-[#9699AA]"
            }`}
          >
            Monthly
          </p>
          <SwitchDemo
            checkedChange={checkedChange}
            setcheckedChange={setcheckedChange}
          />
          <p
            className={`text-sm font-sans font-normal ${
              checkedChange ? "text-[#022959]" : "text-[#9699AA]"
            }`}
          >
            Yearly
          </p>
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
