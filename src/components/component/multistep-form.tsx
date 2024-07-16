// components/MultiStepForm.tsx
import { useState } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";


interface Step {
  question: string;
  options: string[];
}

const steps: Step[] = [
  { question: "Step 1: Choose an option", options: ["Option 1", "Option 2", "Option 3"] },
  { question: "Step 2: Choose an option", options: ["Option A", "Option B", "Option C"] },
  { question: "Step 3: Choose an option", options: ["Option X", "Option Y", "Option Z"] },
  { question: "Step 4: Choose an option", options: ["Option M", "Option N", "Option O"] },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
          <Progress value={(currentStep / 3) * 100} />
          <h2 className="text-2xl mb-4">{steps[currentStep].question}</h2>
          <form>
            {steps[currentStep].options.map((option) => (
              <div key={option} className="mb-4">
                <label className="labelOption">
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selections[currentStep] === option}
                    onChange={() => handleOptionChange(option)}
                    className="form-radio hidden"
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </div>
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
        <h3 className="mt-4 text-xl">Selected: {selections[currentStep]}</h3>
      </div>
    </section>
  );
};

export default MultiStepForm;
