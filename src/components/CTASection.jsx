import Lottie from "lottie-react";
import HandAnimation from "../assets/HandAnimation.json";

const CTASection = () => (
  <div className="flex justify-center items-center">
    <button className="flex items-center gap-2 px-6 py-3 text-white rounded-xl hover:bg-amber-500 hover:scale-105 transition-transform duration-300">
      <Lottie 
        animationData={HandAnimation} 
        loop={true} 
        style={{ width: 38, height: 38 }} 
      />
      <span className="text-l font-medium text-orange-300">Book a Demo</span>
    </button>
  </div>
);

export default CTASection;
