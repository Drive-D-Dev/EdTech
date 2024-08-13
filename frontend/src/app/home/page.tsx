import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col space-y-4 w-[70%]">
        <div className="flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg rounded-md">
          <p className="text-black text-lg font-semibold">
            Your goal within reach
          </p>
          <p className="text-black text-lg font-semibold text-center">
            Do mock exams, practice questions, get answers all in one app
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg space-y-4 rounded-md">
          <p className="text-black text-lg font-semibold">Top questions</p>

          <div className="flex justify-between items-center bg-white w-full h-fit p-4 border border-gray-300 rounded-md">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="text-black">Some question about law.</span>
            </div>
            <span className="text-gray-600">50%</span>
          </div>

          <div className="flex justify-between items-center bg-white w-full h-fit p-4 border border-gray-300 rounded-md">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="text-black">Some question about law.</span>
            </div>
            <span className="text-gray-600">50%</span>
          </div>

          <p className="text-black text-sm">see more</p>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg space-y-4 rounded-md">
          <p className="text-black text-sm">Do mock exam</p>
          <Button variant={"default"}>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
