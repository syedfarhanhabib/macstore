import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";
import Card from "../store/card";
import FormCard from "./formCard";

interface Step {
  question: string;
  options: string[];
}

const steps: Step[] = [
  {
    question: "Tell us, what will you use your Mac for?",
    options: [
      "Essentials",
      "Work",
      "Education",
      "Creative"
    ]
  },
  {
    question: "And where will you use your Mac?",
    options: [
      "Fixed",
      "Around my home",
      "Out and about",
    ]
  },
  {
    question: "Lastly, do you have a budget in mind?",
    options: [
      "Upto $1,500",
      "Upto $2,500",
      "Upto $3,000",
      "$4,000 and over",
    ]
  },
  {
    question: "Here are your personalized recommendations",
    options: [],
  },
];

let recommendations = {
  title: "iMac"
};



const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<(string | null)[]>(Array(steps.length - 1).fill(null));

  const handleOptionChange = (option: string) => {
    const newSelections = [...selections];
    if (newSelections[currentStep] === option) {
      newSelections[currentStep] = null; // Deselect if already selected
    } else {
      newSelections[currentStep] = option; // Select new value
    }
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

  if (selections[0] === "Work", selections[1] === "Fixed", selections[2] === "Upto $2,500") {
    recommendations.title = "Mac Studio";
  } else if (selections[0] === "Education", selections[1] === "Around my home", selections[2] === "Upto $1,500") {
    recommendations.title = "Macbook Air";
  } else if (selections[0] === "Creative", selections[1] === "Fixed", selections[2] === "Upto $2,500") {
    recommendations.title = "Mac Mini";
  } else {
    recommendations.title = "iMac";
  }

  return (
    <section id="form" className="relative overflow-hidden bg-muted rounded-3xl">
      <div className='flex flex-col justify-between relative p-10 max-w-[85vw] min-h-[85vh] mx-auto px-10 sm:px-32 lg:px-64'>
        <div className="top">
          <motion.div
            initial={{ opacity: 0, y: '20%', scaleY: '90%' }}
            whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
            viewport={{ once: true }}
            className="grid gap-5 mb-5">
            {currentStep === 0 && (
              <p className="desc">Answer a few questions to get a personalized recommendation.</p>
            )}
            <Progress value={(currentStep / steps.length) * 100} />
          </motion.div>
          <h2 className="title mb-5">{steps[currentStep].question}</h2>
          {currentStep < steps.length - 1 ? (
            <form className={`grid ${currentStep === 0 || currentStep === 2 ? "lg:grid-cols-2" : ""} gap-5`}>
              {steps[currentStep].options.map((option) => (
                <React.Fragment key={option}>
                  <motion.div
                    initial={{ opacity: 0, y: '30%', scaleY: '90%' }}
                    whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
                    viewport={{ once: true }}>
                    <label className="labelOption">
                      <input
                        type="radio"
                        name={`option-${currentStep}`}
                        value={option}
                        checked={selections[currentStep] === option}
                        onClick={() => handleOptionChange(option)}
                        readOnly
                        className="form-radio hidden"
                      />
                      <span className="subtitle">{option}</span>
                    </label>
                  </motion.div>
                </React.Fragment>
              ))}
            </form>
          ) : (
            <div className="recommendations grid gap-5">

              <motion.div
                initial={{ opacity: 0, y: '30%', scaleY: '90%' }}
                whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
                viewport={{ once: true }}
                className="">
                <FormCard itemName={recommendations.title} />
              </motion.div>
            </div>
          )}
        </div>
        <div className="buttons flex justify-between items-center mt-4">
          <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            <FaArrowLeft />
          </Button>
          {[0, 1].includes(currentStep) && (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!selections[currentStep]}
              className="bg-accent disabled:bg-foreground"
            >
              <motion.h3
                initial={{ opacity: 0, scaleX: '90%' }}
                animate={{ opacity: 1, scaleX: '100%' }}
                viewport={{ once: true }}
              >
                {selections[currentStep] ? "Next" : "Select an option"}
              </motion.h3>
            </Button>
          )}
          {[2].includes(currentStep) && (
            <Button
              type="button"
              onClick={nextStep}
              disabled={!selections[currentStep]}
              className="bg-green-500 hover:bg-green-600"
            >
              <motion.h3
                initial={{ opacity: 0, scaleX: '90%' }}
                animate={{ opacity: 1, scaleX: '100%' }}
                viewport={{ once: true }}
              >
                See recommendations
              </motion.h3>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;

