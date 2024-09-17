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
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

export default function Component() {
  return (
    <div className="">
      {/* <AspectRatio ratio={16 / 9}> */}
      <Image src="/banner.webp" width={1200} height={300} alt="Image" className="rounded-md object-cover h-80" />
      {/* </AspectRatio> */}
      {/* <div className="mb-8 h-60 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg"></div> */}


      <h2 className="text-2xl font-bold mb-4 mt-8">กวดโจทย์ข้อสอบ ภาค ก.</h2>
      <StudySetWrapper />
      {/* <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">โจทย์ที่คุณทำค้างไว้</h3>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">ชุดข้อสอบจำลองชุดที่ 1</CardTitle>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">คำถาม 72 ข้อ</span>
              <Star className="h-4 w-4 text-yellow-400 ml-2" />
            </div>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">ทำต่อ</Button>
          </CardFooter>
        </Card>
      </div> */}
    </div>
  );
}
