import React, { useEffect, useState } from "react";

export default function Step1({
  personalInfo,
  handleChange,
  step,
  increaseStep,
  setStep,
  errors,
  handle
}) {
  
  return (
    <div
      className="flex flex-col h-full justify-between"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
            <h3 className="text-[#022959] font-bold text-2xl xs:text-4xl">Personal Info</h3>
            <p className="text-[#9699AA] text-base">
              Please provide your name, email address, and phone number.
            </p>
        </div>

        <div className="inputs flex flex-col gap-4">
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="text-sm text-[#022959] mb-1 block"
              >
                Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <input
              className={`form-input border-2 border-[#D6D9E6] w-full px-3 py-2 rounded-xl focus:border-[#483EFF] text-[#022959] ${
                errors.name && "border-[#EE374A]"
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Arda"
              value={personalInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="text-sm text-[#022959] mb-1 block"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <input
              className={`form-input border-2 border-[#D6D9E6] w-full px-3 py-2 rounded-xl focus:border-[#483EFF] text-[#022959] ${
                errors.email && "border-[#EE374A]"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="arda@notuscreative.com"
              value={personalInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="text-sm text-[#022959] mb-1 block"
              >
                Phone Number
              </label>
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>
            <input
              className={`form-input border-2 border-[#D6D9E6] w-full px-3 py-2 rounded-xl focus:border-[#483EFF] text-[#022959] ${
                errors.phone && "border-[#EE374A]"
              }`}
              type="phone"
              id="phone"
              name="phone"
              placeholder="+905555555555"
              value={personalInfo.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="hidden button-div xs:flex justify-between mt-28">
        {step !== 1 && (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="text-[#164A8A] font-medium text-base hover:text-[#022959] transition-all"
          >
            Go back
          </button>
        )}
        <button
          type="button"
          onClick={() => handle()}
          className="bg-[#164A8A] ml-auto font-medium text-base text-white px-5 py-2 rounded-lg self-end hover:bg-[#022959] transition-all"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
