'use client'

import Footer from "../footer";
import Header from "../header";

import Link from "next/link";

import React, { useState, useEffect } from 'react';

export default function Report() {

    const [coldChecks, setColdChecks] = useState(1)

    const [currentDate, setCurrentDate] = useState('');

    const increaseColdChecks = () => {
        setColdChecks(coldChecks + 1);
    };

    const decreaseColdChecks = () => {
        if (coldChecks > 1) {
            setColdChecks(coldChecks - 1);
        }
    };

    function getRandomInt() {
        return Math.floor(Math.random() * 5) + 1;
      }

      function getRandomIntInRange() {
        return Math.floor(Math.random() * 17) + 69;
      }
    

      function getRandomBoolean() {
        return Math.random() < 0.5;
      }
    
    let firsts = getRandomBoolean()
    let seconds = getRandomBoolean()
    let thirds = getRandomBoolean()

    let first = firsts && "10:00" || "10:30"
    let second = seconds && "12:00" || "12:30"
    let third = thirds && "14:00" || "14:30"

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        setCurrentDate(`${year}-${month}-${day}`);
      }, []);


      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let cardValue = formData.get('card');
        let cashValue = formData.get('cash');
        let noteValue = formData.get('notes');
        let yesValue = formData.get('yes');
        let signedValue = formData.get('signed');
        let locationValue = formData.get('location');
        let dateVale = formData.get('date');
        let staffV = formData.get('staff');

        let equipmentData = [];

        if (signedValue === "Shreena") {
            locationValue = "Market"
            yesValue = "No"
            if (noteValue === "") {
                noteValue = "Nothing to report."
            }
            equipmentData =
            [
                {
                    "item": "Cooler",
                    "times": [
                        first,
                        second,
                        third,
                    ],
                    "temps": [
                        getRandomInt(),
                        getRandomInt(),
                        getRandomInt(),
                    ]
                },
                {
                    "item": "Rice",
                    "times": [
                        first,
                        second,
                        third,
                    ],
                    "temps": [
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                    ]
                },
                {
                    "item": "Chana Massala",
                    "times": [
                        first,
                        second,
                        third,
                    ],
                    "temps": [
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                    ]
                },
                {
                    "item": "Soya Keema",
                    "times": [
                        first,
                        second,
                        third,
                    ],
                    "temps": [
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                    ]
                },
                {
                    "item": "Butter Tofu",
                    "times": [
                        first,
                        second,
                        third,
                    ],
                    "temps": [
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                        getRandomIntInRange(),
                    ]
                }
            ]
        } else {
        // Iterate over each equipment input set based on coldChecks
        for (let i = 0; i < coldChecks; i++) {

            let item = formData.get(`${i}item`);

            const equipment = {
                item: item,
                times: [],
                temps: []
            };

            // Retrieve time and temp values for each equipment
            for (let j = 1; j <= 3; j++) {
                const time = formData.get(`${i}time${j}`);
                const temp = formData.get(`${i}temp${j}`);
                equipment.times.push(time);
                equipment.temps.push(temp);
            }

            equipmentData.push(equipment);
        }
        }


        fetch('http://localhost:3001/submit-form', { // Update port number if your server is running on a different port
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Date: dateVale,
            Location: locationValue,

            Card: cardValue,
            Cash: cashValue,
            Staff: staffV,

            Urgent: yesValue,
            Notes: noteValue,

            Signed: signedValue,
            equipmentData: equipmentData,

        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    };

    
  return (
    <main className="w-full h-screen overflow-y-auto flex flex-col pb-2 items-center">
      <Header />
      <div className="flex relative flex-col w-full min-h-[80%] justify-between bg-orange-200 ">
        <p className="text-center text-4xl my-2">End of Day Report</p>
         <form onSubmit={handleSubmit} className="flex flex-col items-center w-full h-full overflow-y-scroll">

            <label>date<input name="date" type="date" className="mx-3 p-1 my-2" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)}/></label>
            <label>location<input className="mx-3 p-1 my-2" name="location" type="text" /></label>

            <div className="flex sm:flex-row flex-col ">
            <label>card<input className="mx-3 p-1 my-2" name="card" type="number" required/></label>
            <label>cash<input className="mx-3 p-1 my-2" name="cash" type="number" required/></label>
            </div>

            <label>Staff Hours<input className="mx-3 mt-2 p-1" name="staff" placeholder="0" type="number" /></label>


            <div className="flex flex-col mt-4">
                <p className="text-2xl my-1">Temperature Checks &nbsp; - &nbsp; {coldChecks}</p>
                <div className="flex w-full justify-evenly">
                <button type="button" className="mx-2 bg-green-300 py-1 px-2 rounded shadow" onClick={increaseColdChecks}>+ Add</button>
                <button type="button" className="mx-2 bg-red-300 py-1 px-2 rounded shadow" onClick={decreaseColdChecks}>- Remove </button>
                </div>
            </div>

            {[...Array(coldChecks)].map((_, index) => (
                    <div key={index} className="my-2 flex flex-col max-w-[95%] items-center bg-orange-100 p-2 rounded-lg shadow">
                        <label><input name={`${index}item`} placeholder="Equipment / Food" className="mx-3 p-1 mt-1 mb-3 text-center" type="text" /> #{index + 1}</label>
                        <div className="flex sm:flex-row  mb-2 flex-col ">
                            <label>1&#41; Time <input className="mx-2 p-1 mb-1" name={`${index}time1`} type="text" /></label>
                            <label>Temp<input className="mx-2 mb-1 p-1" name={`${index}temp1`} type="number" /></label>
                        </div>
                        <div className="flex  sm:flex-row flex-col mb-2">
                            <label>2&#41; Time<input className="mx-2 p-1 mb-1" name={`${index}time2`} type="text" /></label>
                            <label> Temp<input className="mx-2 mb-1 p-1" name={`${index}temp2`} type="number" /></label>
                        </div>
                        <div className="flex sm:flex-row flex-col mb-2">
                            <label>3&#41; Time<input className="mx-2 p-1 mb-1" name={`${index}time3`} type="text" /></label>
                            <label>Temp<input className="mx-2 mb-1 p-1" name={`${index}temp3`} type="number" /></label>
                        </div>
                    </div>
                ))}

            <div className="flex flex-col  w-[90%] sm:w-2/3 p-1">
            <label>Notes:</label><textarea name="notes" type="text" />
            </div>

            <div className="flex flex-col my-2 p-1">
            Urgent Action Required?
            <div className="flex justify-evenly">
                <label>
                    <input
                        type="radio" className="mx-2" name="yes"  />
                    Yes
                </label>
                <label>
                    <input
                        type="radio" className="mx-2" name="no"
                    />
                    No
                </label>
                </div>
            </div>

            <label>Signed<input name="signed" className="my-2 mx-2 p-1" type="text" required/></label>


            
          <button type="submit" className="p-2 px-4 mx-1 bg-green-300 rounded my-3 shadow">Submit</button>

          <Link href="/records" className=" flex bg-blue-300 sm:top-2 left-2 sm:absolute rounded-full p-2 w-20 h-20  flex-col items-center justify-center">
            <p>Previous</p>
            <p>Records</p>

        </Link>
        </form>


            


      </div>
      <Footer />
    </main>
  );
}
