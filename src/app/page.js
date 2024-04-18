'use client'

import Footer from "./footer";
import Header from "./header";

import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser"

import Link from 'next/link'

export default function Home() {

  console.log("home render");

  const whatRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewRef = useRef(null);

  const [testyNum, setTestyNum] = useState(0)

  const [menu, setMenu] = useState(false)

  const [sent, setSent] = useState(false)

  const testys = [
    {
      name: "Adam - Food & Drinks Officer",
      location: "Queens College, Cambridge",
      message: "I was fortuante enough to have worked with Vegan Bites to cater an event for nearly 2000 people. And let me tell you that they executed this with truly stellar logistics, nonstop quality, and such brimming human warmth. Their energy left a smile on everyone's faces!",
    },
    {
      name: "Claire",
      location: "Birthday Party",
      message: "Shreena catered my 40th birthday party and I could not have been happier with the food and service! Everyone (even the meat eaters) raved about the hot dogs and the loaded fries were FULL delish! Shreena went to special effort to make the event run smoothly and is an absolutely delightful human all round! If you want fun food that meets everyones needs and preferences then book Shreena for your event, you will not be disappointed!",
    },
    {
      name: "Tamsyn",
      location: "Flight Training London",
      message: "We hired Vegan Bites for our 10 Year Anniversary Party for a range of dietary requirement guests and they were a hit! Not only were the hotdogs delicious, the set-up beautifully done, but they were super friendly people and guests were asking about them after the party! Thanks so much Shreena!",
    },
    {
      name: "Isabelle",
      location: "Oriel College, Oxford",
      message: "Vegan Bites were the perfect supplier: great communication, prompt arrival, really accommodating and, of course, delicious food. All our guests loved the hot dogs, particularly the meat eaters, and the committee loved how Vegan Bites offset their carbon footprint after the Ball. I cannot recommend Vegan Bites enough for large events like college balls or weddings! Thank you!",
    },
    {
      name: "Effy - Managing Director",
      location: "BibbleBobble Productions",
      message: "We were so pleased we decided to have Vegan Bites at our event. They were great to work with, communicative and all round lovely people. Even non-vegan attendees and staff raved about how good their food was.",
    },
  ]

  const handleSubmit = (e) => {

    setSent(true)

    e.preventDefault();

    // emailjs.sendForm("service_98h6xo5", "template_hvh1fid",e.target, "7mgkBUUiVCk0Yafrf")

  }

  const whatScroll = () => {
    if (menu) {
      setMenu(false)
      whatRef.current.scrollIntoView({ behavior: 'smooth' })

    } else {
      whatRef.current.scrollIntoView({ behavior: 'smooth' })

    }
  };

  const reviewScroll = () => {
    if (menu) {
      setMenu(false)
      reviewRef.current.scrollIntoView({ behavior: 'smooth' })

    } else {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' })

    }
  };

  const menuScroll = () => {
    if (menu) {
      setMenu(false)
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  } else {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })

  }
  };

  const contactScroll = () => {
    if (menu) {
      setMenu(false)
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })

  }
  };

  const galleryScroll = () => {
    if (menu) {
      setMenu(false)
      galleryRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' })

  }
  };

  return (
    <main className="w-full h-screen overflow-y-auto z-10 flex flex-col  items-center">
            <img src="/mom.png" alt="mom" className="absolute py-[15%] mt-6 sm:py-[7%] rounded-full  sm:flex sm:left-0 h-full opacity-20"/>

            <div className="sm:flex flex-col hidden absolute z-30 right-3 h-full items-center justify-center">
              <Link className="w-8 h-8 my-2 p-[5%]" href=""><img src="mail-01.png" alt="mail" /> </Link>
              <Link className="w-8 h-8 my-2 p-[5%]" href="https://www.instagram.com/veganbites.uk"><img src="in.png" alt="instagram logo" /> </Link>
              <Link className="w-8 h-8 my-2 p-[5%]" href="https://www.facebook.com/veganbites.uk"><img src="fb.png" alt="facebook logo" /> </Link>
            </div>

      <div className="flex justify-center items-center w-full max-h-[12.5%] min-h-[12.5%]">
      <Header whatClick={whatScroll} menuClick={menuScroll} contactClick={contactScroll} galleryClick={galleryScroll} reviewClick={reviewScroll} menu={menu} setMenu={setMenu}/>
      </div>

      <div className="flex relative flex-col max-h-[85%] min-h-[85%]  items-center overflow-y-auto w-full">


      <div className="h-full sm:min-h-full sm:w-[85%] w-[90%] flex-col sm:flex-row z-10 bg-orange-200 rounded shadow flex mt-1 sm:mt-3">
          <div className="w-full  sm:w-1/2 h-1/2 sm:h-full flex flex-col items-center justify-between py-2">
            <p className="sm:text-[50px] text-[26px] text-center ">100% plant based delicousness</p>
            <div className="flex flex-col ">
            <p className="sm:text-[36px] px-2 text-center text-[20px]">Authentic Indian Street Food</p>
            <p className="sm:text-[36px] px-2 text-center text-[20px]">Unforgettable flavours</p>
            <p className="sm:text-[36px] px-2 mb-12 text-center text-[20px]">and a combination of our favourite dishes.</p>
            <p className="sm:text-[36px] px-2 mt-10 text-center text-[20px]">Giving you the real vegan bites</p>
            <p className="sm:text-[36px] px-2 text-center text-[20px]">experience every time.</p>
            </div>
            <p>@veganbites.uk</p>
          </div>
          <div className="w-full sm:w-1/2 sm:h-full h-1/2 flex flex-col items-center justify-center">
            <img className="h-[90%]" src="/box.jpg" alt="rice box" />
          </div>
      </div>

      <div className=" sm:min-h-[65%] z-10 relative w-[90%] rouned shadow sm:w-[70%] bg-orange-100 flex flex-col mt-10 items-center">

          <img className="absolute bottom-5 rotate-[6deg] h-28 right-8" src="/carbon.webp" alt="carbon" />

          <p className="text-[50px] " ref={whatRef}>What We Do</p>
          <p className="w-[70%] pb-4">&nbsp; Vegan Bites is a deliciously plant-based street food alternative to traditional hot dogs. Find us at Cambridge Market every Thursday, Friday, Saturday & Sunday. Over our 9 years of catering experience, we noticed the need for tasty, quick, and proper plant-based food which is responsibly sourced. We cater for all types of events, whether large or small. We know firsthand how hard it can be to find great tasting food suitable for most dietary requirements and we wanted our menu to be enjoyable for all. The hot dogs themselves contain none of the major allergens groups and gluten free bread rolls can be made available on request. Sustainability is very important to us and we are aware of the part we have to play. After each event, we work out the carbon generated by us and then offset this carbon in one of a handful of ways. Well then send you a break down of the whole thing for your reference, nice and easy! See our sustainability statement. To read more about us and why we do it, check out our little bit extra page.</p>
      </div>

      <div className="max-h-full w-[90%] z-10 sm:w-[85%] bg-orange-200 rounded shadow flex flex-col mt-10 items-center">
          <p className=" text-[50px]" ref={menuRef}>Our Menu</p>
          <div className="w-full flex flex-col sm:flex-row">
            <div className="sm:w-1/2 max-h-[200px] w-full sm:max-h-[600px] flex flex-col items-center justify-center">
            <img className="h-[90%]" src="/box.jpg" alt="rice box" />
            </div>
            <div className="w-full sm:w-1/2 flex p-3 flex-col items-center justify-center">
              <p className="sm:w-1/2 overflow-y-scroll"> &nbsp; Our menu brings together our favourite flavours from around the world - familiar tastes as well as new ones. We cook our hot dogs American style for that familiar smokey flavour of traditional hot dogs. Proud to say our food is loved by everyone, vegans and non-vegans alike! Dont just take our word for it read what our customers have to say. For flavours close to home try our Classic or Smokey hotdogs or for a flavour further afield we have Korean, Hot Hot or Bombae. For the full menu just get in contact! See our menu allergens</p>
            </div>
          </div>
        </div>

        <div className="min-h-[600px] z-10 sm:w-[70%] w-[90%] bg-orange-100 rounded shadow flex flex-col mt-10 items-center">
          <p className="h-[10%] text-[50px] mb-1" ref={contactRef}>Contact</p>
          {!sent && <div className="flex flex-col h-full justify-between">
          <p className="text-center px-4 mt-4">For event enquires please let us know the details using the form below.</p>
          
          <form className="w-[90%] h-[70%] flex flex-wrap justify-evenly items-center" onSubmit={handleSubmit}>
            <label className="w-full flex items-center justify-center">name :
              <input type="text" className="w-2/3 ml-3" required/>
            </label>
            <label className="w-full flex items-center justify-center">email :
              <input type="text" className="w-2/3 ml-3" required />
            </label>
            <label className="w-full flex items-center justify-center">subject :
              <input type="text" className="w-2/3 ml-3" required />
            </label>
            <label className="w-full flex justify-center">message :
              <textarea type="text" className="w-2/3 ml-3" required />
            </label>
            <button type="submit" className="hover:text-orange-700 bg-orange-300 rounded w-1/4 shadow "> Send</button>

          </form> 
          <p className=" text-center px-4 mb-4"> If youd like to contact us more directly you can via any of the methods at the bottom of the page.</p>
          </div>|| <p>thanks</p>}
        </div>

        <div className="h-[350px] z-10 w-[90%] sm:w-[85%] bg-orange-200 px-2 flex rounded shadow flex-col mt-10 items-center">
          <p className="h-[20%] text-center w-full flex items-center justify-center text-[50px]" ref={galleryRef}>Gallery</p>
          <div className="h-[80%] overflow-x-auto no-scrollbar w-full mb-2 flex">
            <div className="min-w-60 relative text-transparent hover:text-white bg-black h-full mr-3">
              <img className="h-full w-full object-cover shadow z-10 hover:opacity-40 " src="/wood.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Wonder of Wood Festival</p>
            </div>
            <div className="min-w-60 relative text-transparent hover:text-white bg-black h-full mx-3">
              <img className="h-full w-full object-cover shadow z-10 hover:opacity-40" src="/fire.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Kimbolton Fireworks</p>

            </div>
            <div className="min-w-60 relative text-transparent hover:text-white bg-black h-full mx-3">
              <img className="h-full w-full object-cover shadow z-10 hover:opacity-40" src="/first.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Our First Event!</p>

            </div>
            <div className="min-w-60 relative text-transparent hover:text-white bg-black h-full mx-3">
              <img className="h-full w-full object-cover shadow z-10 hover:opacity-40" src="/queens.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Queens May Ball</p>

            </div>
            <div className="min-w-60 relative text-transparent hover:text-white bg-black h-full mx-3">
              <img className="h-full w-full object-cover shadow z-10 hover:opacity-40" src="/hom.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Homerton May Ball</p>

            </div>
            <div className="min-w-60 relative text-transparent hover:text-white h-full bg-black ml-3">
              <img className="h-full w-full z-10 object-cover hover:opacity-40 shadow" src="/oriel.png" alt="rice box" />
              <p className="absolute top-[50%] left-0 z-20 text-center w-full">Oriel College Ball</p>
            </div>
          </div>
      </div>

      <div className="max-h-[350px] z-10 min-h-[350px] w-[90%] sm:w-[70%] rounded shadow bg-orange-100 flex flex-col mt-10 items-center">
          <p ref={reviewRef} className="h-[15%] text-center text-[50px] w-full mb-1">Reviews</p>

          <div className="min-h-[80%] px-16 relative w-full flex flex-col items-center text-justify">

          <button className="absolute right-2 hover:text-orange-700 top-[30%] text-[55px]" onClick={() => setTestyNum(prevNum => prevNum === 4 ? 0 : prevNum + 1)}>&gt;</button>
          <button className="absolute left-2 hover:text-orange-700 top-[30%] text-[55px]" onClick={() => setTestyNum(prevNum => prevNum === 0 ? 4 : prevNum - 1)}>&lt;</button>

            <p className="text-[26px] mt-4">{testys[testyNum].name}</p>
            <p className="text-[26px] mb-1">{testys[testyNum].location}</p>
            <p className="overflow-hidden sm:text-[24px] h-full overflow-y-scroll my-2"> &nbsp; &quot;{testys[testyNum].message}&quot;</p>
          </div>
      </div>

      <iframe className="rounded-lg z-10 w-[90%] sm:w-[80%] sm:min-h-[50%] min-h-[40%] shadow-lg mt-10 mb-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0972439901343!2d0.1191343!3d52.2052803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8718ca20d3c21%3A0xb9a5c7a21a51e70!2sVegan%20Bites!5e0!3m2!1sen!2suk!4v1687821276327!5m2!1sen!2suk"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <Link href="https://ratings.food.gov.uk/business/1473993/vegan-bites/online-ratings" ><img src="/level5.webp" alt="food hygiene level 5" className="mt-6" /></Link>
    <Footer />
    </div>
    </main>
  );
}
