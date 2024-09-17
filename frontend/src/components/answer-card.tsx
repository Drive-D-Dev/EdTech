import React from "react";
import { Sparkles } from "lucide-react";

const answerCard = () => {
  return (
    <div className="box flex flex-row space-x-2">
      <div className="w-[5%]">
        <div className="w-9 h-9  bg-[#DB7801] flex items-center justify-center text-white text-md rounded-lg">
          1
        </div>
      </div>

      <div className="flex flex-col w-[95%] justify-between space-y-5">
        <div className="flex flex-row">
          <div className="w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </div>
          <div className=" w-[5%] ">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#0009E7] to-[#6686DA] rounded-3xl">
              <Sparkles color="white" />
            </div>
          </div>
        </div>
        <div className="box">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </div>

        <div className="relative px-7 py-6 bg-green-500 rounded-lg">
          <div className="absolute inset-3 flex items-center justify-center">
            <div className="w-[99%] h-[85%] bg-white rounded-md p-4 flex ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </div>
          </div>
        </div>

        <div className="box ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </div>
        <div className="box ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </div>
      </div>
    </div>
  );
};

export default answerCard;
