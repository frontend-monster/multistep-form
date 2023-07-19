import React from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchDemo = ({ checkedChange, setcheckedChange }) => (
  <form>
    <div className="flex items-center">
      <Switch.Root
        className="w-[42px] h-[20px] bg-[#022959] rounded-full relative shadow-[0_2px_10px] shadow-black/20 data-[state=checked]:bg-[#022959] outline-none cursor-default"
        id="airplane-mode"
        checked={checkedChange}
        onCheckedChange={() => {
          setcheckedChange(!checkedChange);
        }}
      >
        <Switch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[23px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
