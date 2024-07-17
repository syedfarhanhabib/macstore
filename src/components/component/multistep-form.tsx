// components/MultiStepForm.tsx
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";


interface Step {
  question: string;
  options: string[];
}

// const steps: Step[] = [
//   { question: "Tell us, what will you use your Mac for?", options: ["Essentials", "Work", "Education", "Creative"] },
//   { question: "Step 2: Choose an option", options: [{ title: "Option A", icon: "", desc: "" }, "Option B", "Option C"] },
//   { question: "Step 3: Choose an option", options: ["Option X", "Option Y", "Option Z"] },
//   { question: "Step 4: Choose an option", options: ["Option M", "Option N", "Option O"] },
// ];
const steps: Step[] = [
  { question: "Tell us, what will you use your Mac for?", options: ["Essentials", "Work", "Education", "Creative"] },
  { question: "Step 2: Choose an option", options: ["Option A", "Option B", "Option C"] },
  { question: "Step 3: Choose an option", options: ["Option X", "Option Y", "Option Z"] },
  { question: "Step 4: Choose an option", options: ["Option M", "Option N", "Option O"] },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<(string | null)[]>(Array(steps.length).fill(null));

  const handleOptionChange = (option: string) => {
    const newSelections = [...selections];
    newSelections[currentStep] = option;
    setSelections(newSelections);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-muted rounded-3xl" >
      <div className='flex flex-col justify-between relative p-10 max-w-[85vw] min-h-[85vh] mx-auto px-10 sm:px-32 lg:px-64' >
        <div className="top">
          <motion.div
            initial={{ opacity: 0, y: '20%', scaleY: '90%' }}
            whileInView={{ opacity: 1, y: '0%', scaleY: '100%', }}
            viewport={{ once: true }}
            className=" grid gap-5 mb-5 ">
            {currentStep === 0 && (
              <p className="desc">Answer a few questions to get a personalized recommendation.</p>
            )}
            <Progress value={(currentStep / 3) * 100} />
          </motion.div>
          <h2 className="title mb-5">{steps[currentStep].question}</h2>
          <form className="grid lg:grid-cols-2 gap-5" >
            {steps[currentStep].options.map((option) => (
              <React.Fragment key={option} >
                <div className="">
                  <label className="labelOption">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selections[currentStep] === option}
                      onChange={() => handleOptionChange(option)}
                      className="form-radio hidden"
                    />
                    <span className="subtitle">{option}</span>

                  </label>
                </div>
              </React.Fragment>

            ))}
          </form>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            <FaArrowLeft />
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={!selections[currentStep]}
            className="bg-accent disabled:bg-foreground"
          >
            <motion.h3
              initial={{ opacity: 0, scaleX: '0%' }}
              whileInView={{ opacity: 1, scaleX: '100%' }}
              viewport={{ once: true }}
            >
              {selections[currentStep] ? "Next" : "Please select an option"}
            </motion.h3>
          </Button>
        </div>
        {/* <h3 className="mt-4 text-xl">Selected: {selections[currentStep]}</h3> */}
      </div>
    </section>
  );
};

export default MultiStepForm;
