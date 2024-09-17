import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const answerCard = () => {
  return (
    <div className="box flex flex-row space-x-2">
      <div className="">
        <div className="w-9 h-9  bg-[#DB7801] flex items-center justify-center text-white text-md rounded-lg">
          1
        </div>
      </div>

      <div className="flex flex-col w-[95%] justify-between space-y-3">
        <div className="flex flex-row">
          <div className="w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur.
          </div>
          <div className=" ">
            <Button size="icon" className="from-[#0009E7] to-[#6686DA] bg-gradient-to-br">
              <Sparkles color="white" />
            </Button>
          </div>
        </div>
        <div className="box">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </div>

        <div className="box" style={{
          border: "6px solid #4ADE80",
          paddingBottom: "0px",
          paddingLeft: "0px"
        }}>
          <div className="pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            massa mi.
          </div>

          <p className="flex mt-2">
            <span className="bg-blue-400 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">correct answer</span>

            <span className="bg-green-400 px-2 py-1 rounded-tr-lg order-1  relative z-20">your answer</span>
          </p>
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
    </div >
  );
};

export default answerCard;
