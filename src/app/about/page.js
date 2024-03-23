import Footer from "../footer";
import Header from "../header";

export default function About({}) {

    return (
        <main className="w-full h-full flex flex-col items-center">
            <Header />
            <div className="flex w-full h-[80%] mt-4">
                <div className="w-1/2 bg-red-100">
                    <p>My journey with vegan food began in 2015 when I was studying a sustainability and animal agriculture module at university. I realised the potential positive impact I could have environmentally, socially and ethically.  As I did more research I felt increasingly compelled to provide a service that makes it a little easier to choose a vegan business. I believe that good, healthy and tasty food should be thoughtfully made, accessible and have the least possible impact on our environment. Food is something you always remember. The glee and satisfaction felt after the perfect meal is unmatched! I would love to cater for your event and be a part of creating this feeling! Thank you for your time in finding out a bit more about us. Shreena</p>
                </div>
                <div className="w-1/2 bg-blue-100 flex flex-col items-center">
                    <div className="h-60 w-[90%] bg-yellow-100 rounded-xl shadow my-2 px-4 flex flex-col">
                        <p className="h-[20%] text-center text-[30px]">Our Food</p>
                        <p>&nbsp; We buy our food as locally and responsibly as possible. Our hot dogs are made from pea-protein and are gently steamed to perfection - no oil needed. They are also responsible for 85% less CO2 emissions than pork alternatives and use 90% less water in their production.</p>
                    </div>
                    <div className="h-60 w-[90%] bg-yellow-100 rounded-xl shadow my-2 px-4 flex flex-col">
                        <p className="h-[20%] text-center text-[30px]">Environmental Commitment</p>
                        <p>&nbsp; As a business we support a handful of organisations with their environmental and ecological efforts & our packing comes from carbon neutral suppliers catering24 & noissue.As well as making every event we do carbon neutral we offset and an additional 5 tonnes of carbon dioxide a year. Read our full sustainability statement.</p>
                    </div>
                    <div className="h-60 w-[90%] bg-yellow-100 rounded-xl shadow my-2 px-4 flex flex-col">
                        <p className="h-[20%] text-center text-[30px]">bookings & events</p>
                        <p>&nbsp; Once an event is confirmed we reserve the right to ask for a deposit. All our equipment is electric -  Depending on the size of the event we will require three to six mains power sockets as well as a clean water supply. </p>
                    </div>
                    <div className="h-60 w-[90%] bg-yellow-100 rounded-xl shadow my-2 px-4 flex flex-col">
                        <p className="h-[20%] text-center text-[30px]">ingredients & allergies</p>
                        <p>&nbsp; We do not use any products that contain nuts in our food. Our plant based hot dogs contain none of the major allergen groups. Our buns contain wheat and soya - gluten free buns can be made available if requested. To see a breakdown of all the allergens in our food see our allergy matrix.</p>
                    </div>
                    <div className="h-60 w-[90%] bg-yellow-100 rounded-xl shadow my-2 px-4 flex flex-col">
                        <p className="h-[20%] text-center text-[30px]">Health & Saftey</p>
                        <p>&nbsp; We hold a five star food hygiene rating.All of our equipment is electric - no gas, no flame.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}