import { Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StudySetWrapper from "@/components/studyset-wrapper";

export default function Component() {
  return (
    <div className="">
      <div className="mb-8 h-60 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg"></div>

      <h2 className="text-2xl font-bold mb-4">กวดโจทย์ข้อสอบ ภาค ก.</h2>
      <StudySetWrapper />
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">โจทย์ที่คุณทำค้างไว้</h3>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">ชุดข้อสอบจำลองชุดที่ 1</CardTitle>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">คำถาม 72 ข้อ</span>
              <Star className="h-4 w-4 text-yellow-400 ml-2" />
            </div>
          </CardHeader>
          <CardContent>{/* Similar content as above */}</CardContent>
          <CardFooter>
            <Button className="w-full">ทำต่อ</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
