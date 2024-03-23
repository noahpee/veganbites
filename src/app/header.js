import Link from "next/link"

export default function Header({}) {

    return (
        <div className="flex w-full h-[10%] bg-blue-100">
            <Link href="/" className="flex w-1/3 justify-center max-h-full text-[28px] items-center">
                <img className="w-full  px-6 py-2" src="/vbLogo.png" alt="Vegan Bites Logo" />
            </Link>
            <div className="w-2/3 bg-blue-100 flex justify-evenly items-center">
                <p>what we do</p>
                <p>our menu</p>
                <p>contact</p>
                <p>gallery</p>
                <Link href="/about">our story</Link>
            </div>
        </div>
    )
}