import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
            <Button asChild>
                <Link href="/">
                    Go Home
                </Link>
            </Button>
        </div>
    )
}