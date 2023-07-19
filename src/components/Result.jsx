import React from 'react'
import { iconThankYou } from "../assets"
export default function Result({personalInfo}) {
  return (
    <div className="flex flex-col h-full justify-center items-center xs:mt-24">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <img
          src={iconThankYou}
          alt=""
          className="w-20 h-20"
        />
        <h3 className="text-[#022959] font-bold text-2xl xs:text-4xl">
          Thank You {personalInfo.name}!
        </h3>
        <p className="text-[#9699AA] text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
        <p className="text-[#9699AA] text-base">
          Your Phone: {personalInfo.phone} <br />
          Your Email: {personalInfo.email}
        </p>
      </div>
    </div>
  );
}
