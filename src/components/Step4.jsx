import React from 'react'

export default function Step4({ step, setStep, plans, addons}) {
  const activePlan = plans.find((plan) => plan.active);
  const isYearly = activePlan.yearly;
  const clickedAddons = addons.filter((addon) => addon.clicked);
  let addonsPrice = clickedAddons.reduce((acc, addon) => acc + Number(addon.price), 0);
  let price = activePlan.monthlyPrice + addonsPrice;
  

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-[#022959] font-bold text-2xl xs:text-4xl">
            Finishing Up
          </h3>
          <p className="text-[#9699AA] text-base">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col bg-[#F8F9FF] px-4 sm:px-6 py-4 rounded-lg divide-y gap-5">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-medium text-sm sm:text-base text-[#022959] flex flex-col gap-1 sm:gap-2">
                {activePlan.type} {isYearly ? "(Yearly)" : "(Monthly)"}
                <button
                  className="text-[#9699AA] font-normal text-xs sm:text-sm font-sans underline self-start hover:text-[#483EFF] transition-all duration-300"
                  onClick={() => setStep(2)}
                >
                  Change
                </button>
              </h1>

              <p className="font-bold font-sans text-sm sm:text-base text-[#022959]">
                {isYearly
                  ? `$${10 * activePlan.monthlyPrice}/yr`
                  : `$${activePlan.monthlyPrice}/mo`}
              </p>
            </div>

            {clickedAddons.length > 0 && (
              <div className="addons flex flex-col gap-4 py-5">
                {clickedAddons.map((addon) => {
                  return (
                    <div className="flex justify-between w-full items-center">
                      <h3 className="font-sans font-normal text-[#9699AA] text-sm">
                        {addon.title}
                      </h3>

                      <p className="font-sans font-normal text-[#022959] text-sm">
                        {isYearly
                          ? `$${10 * addon.price}/yr`
                          : `$${addon.price}/mo`}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="sm:px-6 py-2 flex items-center justify-between">
            <h3 className="font-sans font-normal text-[#9699AA] text-sm">
              Total {isYearly ? "(per year)" : "(per month)"}
            </h3>
            <p className="font-sans font-bold text-base sm:text-xl text-[#483EFF]">
              {isYearly ? `+$${10 * price}/yr` : `+$${price}/mo`}
            </p>
          </div>
        </div>
      </div>

      <div className={`hidden xs:flex button-div justify-between ${clickedAddons.length !== 0 ? "mt-28" : "mt-48"}`}>
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
          Confirm
        </button>
      </div>
    </div>
  );
}
