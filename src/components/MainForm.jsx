import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bgSidebarDesktop, bgSidebarMobile } from "../assets";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Result from "../components/Result";
import { slideAnimation } from "../config/motion";

const bgImageDesktop = {
  backgroundImage: `url(${bgSidebarDesktop})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function MainForm() {
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handle = () => {
    let newErrors = {};

    if (personalInfo.name === "") {
      newErrors.name = "Name is required";
    }

    if (!/\S+@\S+\.\S+/.test(personalInfo.email)) {
      newErrors.email = "Must be a valid email";
    }

    if (personalInfo.phone === "") {
      newErrors.phone = "Required";
    } else if (!/^\d{2,10}$/.test(personalInfo.phone)) {
      newErrors.phone = "Phone must be a valid phone number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed to next step
      setStep((prev) => (step < 6 ? prev + 1 : 1));
    }
  };

  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [checkedChange, setcheckedChange] = useState(false);

  const [plans, setPlans] = useState([
    {
      type: "Arcade",
      monthlyPrice: 9,
      yearly: false,
      active: true,
    },
    {
      type: "Advanced",
      monthlyPrice: 12,
      yearly: false,
      active: false,
    },
    {
      type: "Pro",
      monthlyPrice: 15,
      yearly: false,
      active: false,
    },
  ]);
  const increaseStep = () => {
    setStep((prev) => (prev < steps.length ? prev + 1 : 1));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const steps = [
    { id: 1, title: "YOUR INFO" },
    { id: 2, title: "SELECT PLAN" },
    { id: 3, title: "ADD-ONS" },
    { id: 4, title: "SUMMARY" },
  ];
  const setYearly = (isMonthly) => {
    let updatedPlans;
    if (isMonthly) {
      updatedPlans = plans.map((plan) => ({ ...plan, yearly: true }));
    } else {
      updatedPlans = plans.map((plan) => ({ ...plan, yearly: false }));
    }
    setPlans(updatedPlans);
  };
  const handlePlanChecked = (type) => {
    const updatedPlans = plans.map((plan) =>
      plan.type === type
        ? { ...plan, active: true }
        : { ...plan, active: false }
    );
    setPlans(updatedPlans);
  };
  const colorVariant = {
    hidden: { backgroundColor: "#BEE2FD", scale: 0.8 },
    show: { backgroundColor: "#BEE2FD", scale: 1 },
    exit: { backgroundColor: "transparent", scale: 0.9 },
  };

  const [addons, setAddons] = useState([
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      clicked: false,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      clicked: false,
    },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      clicked: false,
    },
  ]);

  const handleAddOns = (title) => {
    const update = addons.map((addon) =>
      addon.title === title ? { ...addon, clicked: !addon.clicked } : addon
    );
    setAddons(update);
  };

  return (
    <main className="xs:max-w-5xl xs:min-h-[37.5rem] xs:bg-white xs:p-4 rounded-2xl xs:shadow-lg flex flex-col xs:flex-row">
      <div
        className={`xs:rounded-lg py-8 px-10 flex flex-col relative bg-[url(${bgSidebarMobile})] xs:bg-[url(${bgSidebarDesktop})] bg-no-repeat bg-cover bg-center min-h-[175px] xs:min-h-0`}
      >
        <AnimatePresence>
          <motion.ul
            className="flex justify-center xs:flex-col gap-3"
            {...slideAnimation("left")}
          >
            {steps.map((stepItem) => (
              <li
                key={stepItem.id}
                className="flex gap-2 items-center text-white"
              >
                {step === stepItem.id ? (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={colorVariant}
                    className="text-sm font-bold text-black w-9 h-9 xs:w-8 xs:h-8 rounded-full grid place-items-center flex-shrink-0"
                  >
                    {stepItem.id}
                  </motion.div>
                ) : (
                  <motion.div
                    initial="exit"
                    animate="exit"
                    variants={colorVariant}
                    className="text-sm font-bold text-white w-9 h-9 xs:w-8 xs:h-8 rounded-full grid place-items-center border-2 border-white flex-shrink-0"
                  >
                    {stepItem.id}
                  </motion.div>
                )}
                <div className="hidden xs:block">
                  <h6 className="font-normal text-xs text-[#ABBCFF] mb-1">
                    STEP {stepItem.id}
                  </h6>
                  <h2 className="font-bold text-sm">{stepItem.title}</h2>
                </div>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <motion.div>
        {step === 1 && (
          <div className="min-h-[calc(100svh-177px)] xs:min-h-full flex flex-col justify-between">
            <motion.div
              className="bg-white mx-4 relative top-[-60px] py-12 rounded-lg shadow-lg px-12 xs:pt-10 xs:mx-0 xs:static xs:rounded-none xs:shadow-none xs:py-0 xs:bg-transparent"
              {...slideAnimation("right")}
            >
              <motion.section
                className="h-full"
                {...slideAnimation("right")}
              >
                <Step1
                  personalInfo={personalInfo}
                  handleChange={handleChange}
                  step={step}
                  increaseStep={increaseStep}
                  setStep={setStep}
                  {...slideAnimation("right")}
                  errors={errors}
                  handle={handle}
                />
              </motion.section>
            </motion.div>
            <div className="bg-white flex items-center py-3 px-6 justify-between xs:hidden">
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
        )}
        {step === 2 && (
          <div className="min-h-[calc(100svh-177px)] xs:min-h-full flex flex-col justify-between">
            <motion.div
              className="bg-white mx-4 relative top-[-60px] py-12 rounded-lg shadow-lg px-12 xs:pt-10 xs:mx-0 xs:static xs:rounded-none xs:shadow-none xs:py-0 xs:bg-transparent"
              {...slideAnimation("right")}
            >
              <motion.section
                className="h-full"
                {...slideAnimation("right")}
              >
                <Step2
                  plans={plans}
                  setYearly={setYearly}
                  handlePlanChecked={handlePlanChecked}
                  step={step}
                  setStep={setStep}
                  checkedChange={checkedChange}
                  setcheckedChange={setcheckedChange}
                />
              </motion.section>
            </motion.div>
            <div className="bg-white flex items-center py-3 px-6 justify-between xs:hidden">
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="text-[#164A8A] font-medium text-base hover:text-[#022959] transition-all"
              >
                Go back
              </button>
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-[#164A8A] ml-auto font-medium text-base text-white px-5 py-2 rounded-lg self-end hover:bg-[#022959] transition-all"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="min-h-[calc(100svh-177px)] xs:min-h-full flex flex-col justify-between">
            <motion.div
              className="bg-white mx-4 relative top-[-60px] py-12 rounded-lg shadow-lg px-12 xs:pt-10 xs:mx-0 xs:static xs:rounded-none xs:shadow-none xs:py-0 xs:bg-transparent"
              {...slideAnimation("right")}
            >
              <motion.section
                className="h-full"
                {...slideAnimation("right")}
              >
                <Step3
                  step={step}
                  plans={plans}
                  setStep={setStep}
                  addons={addons}
                  setAddons={setAddons}
                  handleAddOns={handleAddOns}
                />
              </motion.section>
            </motion.div>
            <div className="bg-white flex items-center py-3 px-6 justify-between xs:hidden">
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="text-[#164A8A] font-medium text-base hover:text-[#022959] transition-all"
              >
                Go back
              </button>
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-[#164A8A] ml-auto font-medium text-base text-white px-5 py-2 rounded-lg self-end hover:bg-[#022959] transition-all"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="min-h-[calc(100svh-177px)] xs:min-h-full flex flex-col justify-between">
            <motion.div
              className="bg-white mx-4 relative top-[-60px] py-12 rounded-lg shadow-lg px-12 xs:pt-10 xs:mx-0 xs:static xs:rounded-none xs:shadow-none xs:py-0 xs:bg-transparent"
              {...slideAnimation("right")}
            >
              <motion.section
                className="h-full"
                {...slideAnimation("right")}
              >
                <Step4
                  step={step}
                  setStep={setStep}
                  plans={plans}
                  addons={addons}
                />
              </motion.section>
            </motion.div>
            <div className="bg-white flex items-center py-3 px-6 justify-between xs:hidden">
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="text-[#164A8A] font-medium text-base hover:text-[#022959] transition-all"
              >
                Go back
              </button>
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                className="bg-[#164A8A] ml-auto font-medium text-base text-white px-5 py-2 rounded-lg self-end hover:bg-[#022959] transition-all"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="xs:min-h-full flex flex-col justify-between">
            <motion.div
              className="bg-white mx-4 relative top-[-60px] py-12 rounded-lg shadow-lg px-12 xs:pt-10 xs:mx-0 xs:static xs:rounded-none xs:shadow-none xs:py-0 xs:bg-transparent"
              {...slideAnimation("right")}
            >
              <motion.section
                className="h-full"
                {...slideAnimation("right")}
              >
                <Result personalInfo={personalInfo} />
              </motion.section>
            </motion.div>
          </div>
        )}
      </motion.div>
    </main>
  );
}
