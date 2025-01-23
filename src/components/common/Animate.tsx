import React from "react";
import Lottie from "lottie-react";

interface AnimateProps {
  data: object;
  className?: string;
}

function Animate({ data, className }: AnimateProps) {
  return (
    <div className="flex justify-center items-center max-w-md mx-auto h-full">
      <div className="text-center  mx-auto space-y-5 ">
        <Lottie className={`${className} mx-auto`} animationData={data} />
      </div>
    </div>
  );
}

export default Animate;
