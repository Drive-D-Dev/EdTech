import * as React from "react"
import { cn } from "@/lib/utils"
import { MdOutlineLightbulb } from "react-icons/md";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useIsMobile from "@/hooks/use-is-mobile"

const answerContent = {
    question: "How is the weather today?",
    description: "the weather is great"
}
export function AnswerDialog() {
    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    const Trigger = () => (
        <Button variant="outline" className="w-10 p-0 aspect-square">
            <MdOutlineLightbulb className="text-xl" />
        </Button>

    )

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <span>
                        <Trigger />
                    </span>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>{answerContent.question}</DrawerTitle>

                    </DrawerHeader>
                    <AnswerContent className="px-4" />
                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span>
                    <Trigger />
                </span>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>{answerContent.question}</DialogTitle>
                </DialogHeader>
                <AnswerContent />
            </DialogContent>
        </Dialog>
    )

}

function AnswerContent({ className }: React.ComponentProps<"div">) {
    return (
        <div className={cn(className)}>
            {answerContent.description}
        </div>
    )
}
