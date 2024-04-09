import Link from "next/link"

export default function Footer({}) {

    return (
        <div className="flex w-full h-[10%] mt-4 text-[14px] sm:text-[20px] justify-evenly">
            <div className="flex flex-col w-1/4 items-center">
                <p>mobile: 07432456400</p>
                <p>email: shreena@veganbites.uk</p>
            </div>
            <div className="flex flex-col w-1/4 items-center">
                <p>vegan bites ltd</p>
                <p>company no.  13675077</p>
            </div>
            <div className="flex flex-col w-1/4 items-center">
                <Link href="https://www.facebook.com/veganbites.uk">facebook: @veganbites.uk</Link>
                <Link href="https://www.instagram.com/veganbites.uk">instagram: @veganbites.uk</Link>
            </div>
        </div>
    )
}