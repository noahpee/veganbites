import Link from "next/link"

export default function Header({ whatClick, menuClick, galleryClick, contactClick, reviewClick, menu }) {

    return (
        <div className="flex flex-col w-full h-[15%]  sm:flex-row">
            <div className="flex w-full sm:w-1/3 items-end justify-center my-auto h-[90%]">
                <img className="w-full h-[90%] p-2 object-contain" src="/vbLogo.png" alt="Vegan Bites Logo" />
            </div>
            <div className={` ${menu && menu !== "about" && "absolute fixed top-0 w-full z-10 h-full bg-orange-300 flex flex-col items-center justify-evenly text-[40px] py-6" || "w-2/3 hidden text-[26px] sm:flex min-h-1/2 justify-evenly items-center"}`}>
                {menu !== "about" && <div className="flex w-full justify-evenly h-full flex-col items-center">
                <p className="cursor-pointer hover:opacity-50" onClick={whatClick}>what we do</p>
                <p className="cursor-pointer hover:opacity-50" onClick={menuClick}>our menu</p>
                <p className="cursor-pointer hover:opacity-50" onClick={contactClick}>contact</p>
                <p className="cursor-pointer hover:opacity-50" onClick={galleryClick}>gallery</p>
                <p className="cursor-pointer hover:opacity-50" onClick={reviewClick}>reviews</p>
                <Link className="cursor-pointer hover:opacity-50" href="/about">our story</Link>
                </div> ||
                <Link href="/" className="w-full text-right px-20">back &gt;</Link>}
            </div>
        </div>
    )
}