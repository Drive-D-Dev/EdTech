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
    description: "The weather today is expected to be [partly cloudy] with a high of [75°F] and a low of [60°F]. There is a [20% chance of rain] in the afternoon, so you might want to keep an umbrella handy. Winds are coming from the [northwest] at around [10 mph], bringing a slight breeze throughout the day. Overall, it's a [mild] day perfect for outdoor activities, but be prepared for a few showers later in the day.The weather today is expected to be [partly cloudy] with a high of [75°F] and a low of [60°F]."
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
                    <DrawerFooter className="pt-8">
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
            <DialogContent>
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
        <div className={cn("h-[60vh] overflow-y-auto", className)}>
            {answerContent.description}
        </div>
    )
}
