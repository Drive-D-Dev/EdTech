import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

// TODO: update dropdown menu
// TODO: add mode toggle to menu

export function AvatarDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/* 
                    Avoid hydration error
                    by using 'asChild' on DropdownMenuTrigger, 
                    however this need to be use in corraspond with <span /> 
                    avoiding DropdownMenu not trigger
                */}
                <span>
                    <AvatarTrigger />
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const AvatarTrigger = () => {
    return (
        <Button variant="outline" className="flex gap-1 px-3 py-1">
            <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <ChevronDownIcon className="h-4 w-4" />
        </Button>
    )
}