import React, { useEffect, useState } from "react";

// Define the type for the progress state
type Progress = {
  customSoftware: number;
  digitalTransformation: number;
  cloudSolution: number;
  marketing: number;
};

function ITSolutionSection() {
  const [progress, setProgress] = useState<Progress>({
    customSoftware: 0,
    digitalTransformation: 0,
    cloudSolution: 0,
    marketing: 0,
  });

  useEffect(() => {
    const targetValues: Progress = {
      customSoftware: 100,
      digitalTransformation: 95,
      cloudSolution: 95,
      marketing: 95,
    };

    const interval = 20; // Interval in milliseconds
    const incrementSpeed = 1; // Increment step

    const timers = Object.keys(targetValues).map((key) => {
      // Typecast key to ensure it's valid for the Progress type
      return setInterval(() => {
        setProgress((prev) => {
          const keyTyped = key as keyof Progress; // Type assertion to keyof Progress
          const newValue = Math.min(prev[keyTyped] + incrementSpeed, targetValues[keyTyped]);
          return { ...prev, [keyTyped]: newValue };
        });
      }, interval);
    });

    // Cleanup intervals
    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="bg-[#121212] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.IhiqRWFamp-enjV2csKdzwHaE8&pid=Api&P=0&h=180"
            alt="UX Design"
            className="rounded-md object-cover w-full h-full"
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.FNMQftDuXCgiHnZvwtb69wHaFk&pid=Api&P=0&h=180"
            alt="Development"
            className="rounded-md object-cover w-full h-full"
          />
        </div>

        {/* Right Content Section */}
        <div>
          <p className="text-[#4A96FF] text-sm uppercase tracking-wide mb-2">
            Welcome
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We are Leading IT Solution Experts in India
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            We have a skilled group that excels at creating websites and mobile
            applications. We are not just tech geeks but also digital marketing
            geniuses. We grow your businesses through our cutting-edge digital
            marketing techniques, graphic design marvels, and extraordinary
            content writing services.
          </p>
          <p className="text-gray-400 text-lg mb-6">
            Scalelot Technologies assists you in improving your online presence
            helping you engage with your clients and expanding your business.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            {[ 
              { label: "Custom Software Development", value: progress.customSoftware },
              { label: "Digital Transformation", value: progress.digitalTransformation },
              { label: "Cloud Solution", value: progress.cloudSolution },
              { label: "Organic & Performance Marketing", value: progress.marketing }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full rounded-full h-2.5">
                  <div
                    className="bg-[#4A96FF] h-2.5 rounded-full transition-all"
                    style={{ width: `${item.value}%` }} // Fixed syntax error
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 py-3 px-6 bg-[#d0dfea] text-black font-semibold rounded-md hover:bg-[#4A96FF] transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default ITSolutionSection;
