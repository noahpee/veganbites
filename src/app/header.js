import Link from "next/link"

export default function Header({ whatClick, menuClick, galleryClick, contactClick, menu }) {

    return (
        <div className="flex flex-col w-full h-[17.5%] bg-blue-100  sm:flex-row">
            <div className="flex w-full sm:w-1/3 items-center justify-center my-auto h-[90%]">
                <img className="w-full h-full p-2 object-contain" src="/vbLogo.png" alt="Vegan Bites Logo" />
            </div>
            <div className={` ${menu && "absolute fixed top-0 w-full h-full bg-red-100" || "w-2/3 hidden sm:flex min-h-1/2 bg-green-100 justify-evenly items-center"}`}>
                <p onClick={whatClick}>what we do</p>
                <p onClick={menuClick}>our menu</p>
                <p onClick={contactClick}>contact</p>
                <p onClick={galleryClick}>gallery</p>
                <Link href="/about">our story</Link>
            </div>
        </div>
    )
}