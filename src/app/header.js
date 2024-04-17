import Link from "next/link"

export default function Header({ whatClick, menuClick, galleryClick, contactClick, reviewClick, menu, setMenu }) {

    return (
        <div className={`flex flex-col bg-white z-20 w-full h-full sm:flex-row`}>
            <div className="flex w-full sm:w-1/3 items-end justify-center my-auto h-full">
            {menu !== "about" && menu && <div onClick={() => setMenu(!menu)} className=" z-20 text-orange-700 cursor-pointer sm:hidden  text-[55px] text-gray-800  flex items-center justify-center  absolute left-3 top-3">
      ☰
      </div>}
                {menu !== "about" && 
                <div className="w-full h-full flex">
                <img onClick={() => setMenu(!menu)} className="w-full sm:hidden h-full px-12 object-contain" src="/vbLogo.png" alt="Vegan Bites Logo" />
                <img className="w-full sm:block h-full px-12 object-contain" src="/vbLogo.png" alt="Vegan Bites Logo" />

                </div>
                || 
                <Link href="/" className="w-full h-full flex">
                     <img className="w-full h-full px-12 object-contain" src="/vbLogo.png" alt="Vegan Bites Logo" />
                     </Link>}

            </div>

            <div className={` ${menu && menu !== "about" && "absolute fixed inset-0 top-0 w-full z-10 h-full bg-orange-300 flex flex-col items-center justify-evenly text-[40px]" || "w-2/3 hidden text-[26px] sm:flex min-h-1/2 justify-evenly items-center"}`}>
                {menu !== "about" && <div className={`flex ${menu && "flex-col"} w-full justify-evenly  h-full items-center`}>
                <p className="cursor-pointer hover:text-orange-700" onClick={whatClick}>what we do</p>
                <p className="cursor-pointer hover:text-orange-700" onClick={menuClick}>our menu</p>
                <p className="cursor-pointer hover:text-orange-700" onClick={contactClick}>contact</p>
                <p className="cursor-pointer hover:text-orange-700" onClick={galleryClick}>gallery</p>
                <p className="cursor-pointer hover:text-orange-700" onClick={reviewClick}>reviews</p>
                <Link className="cursor-pointer hover:text-orange-700" href="/about">our story</Link>
                </div> || 
                <Link href="/" className="w-full text-right hover:text-orange-700 px-20">back &gt;</Link>}
            </div>
            
        </div>
    )
}