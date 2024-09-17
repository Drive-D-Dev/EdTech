import React from "react";
import { Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StudySetCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">ชุดข้อสอบจำลองชุดที่ </CardTitle>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">คำถาม 72 ข้อ</span>
          <Star className="h-4 w-4 text-yellow-400 ml-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2">
              ก
            </div>
            <span>ภูมิศาสตร์</span>
          </span>
          <span>20 ข้อ</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs mr-2">
              ข
            </div>
            <span>อังกฤษ</span>
          </span>
          <span>32 ข้อ</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs mr-2">
              ค
            </div>
            <span>ตรรกศาสตร์</span>
          </span>
          <span>32 ข้อ</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-1">
        <Button className="w-full">จำลองสนามสอบ</Button>
        <Button className="w-full" variant="outline">
          ฝึกทำข้อสอบ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudySetCard;
