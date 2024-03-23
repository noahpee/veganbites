import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <Header />
      
      <div className="font-logo text-[36px] rotate-[344deg] bg-red-100 h-20 w-20 flex items-center justify-center rounded-full shadow-lg absolute left-20 top-40">
        hiiii
      </div>

      <div className="h-[700px]  w-[80%] bg-yellow-100 flex mt-4">
          <div className="w-1/2 bg-blue-100 h-full flex flex-col items-center justify-center">
            <p className="text-[40px]">Here is the opening text</p>
          </div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <img className="h-[90%]" src="/box.jpg" alt="rice box" />
          </div>
      </div>

      <div className="h-[700px] w-[80%] bg-red-100 flex flex-col mt-4 items-center">
          <p>Header</p>
          <p>text text text</p>
      </div>

      <div className="h-[700px] w-[80%] bg-blue-100 flex flex-col mt-4 items-center">
          <p className="h-[10%]">Header</p>
          <div className="w-full h-[90%] flex">
            <div className="w-1/2 bg-yellow-100 h-full flex flex-col items-center justify-center">
            <img className="h-[90%]" src="/box.jpg" alt="rice box" />
            </div>
            <div className="w-1/2 bg-green-100 h-full flex flex-col items-center justify-center">
              <p>text text text</p>
            </div>
          </div>
        </div>

        <div className="h-[700px] w-[80%] bg-blue-100 flex flex-col mt-4 items-center">
          <p className="h-[10%]">Contact Form</p>
          <p className="h-[10%]">text text text</p>
          <form className="w-full h-[80%] flex flex-col justify-evenly items-center">
            <label>name:
              <input type="text" />
            </label>
            <label>email:
              <input type="text" />
            </label>
            <label>subject:
              <input type="text" />
            </label>
            <label>message:
              <input type="text" />
            </label>
          </form>
        </div>

        <div className="h-[350px] w-[80%] bg-green-100 flex flex-col mt-4 items-center">
          <p className="h-[20%] text-center w-full">Gallery</p>
          <div className="h-[80%] overflow-x-auto no-scrollbar w-full flex">
            <div className="min-w-60 h-full bg-green-100 mx-2">
              <img className="h-full w-full object-cover" src="/box.jpg" alt="rice box" />
            </div>
            <div className="min-w-60 h-full bg-green-100 mx-2">
              <img className="h-full w-full object-cover" src="/box.jpg" alt="rice box" />
            </div>
            <div className="min-w-60 h-full bg-green-100 mx-2">
              <img className="h-full w-full object-cover" src="/box.jpg" alt="rice box" />
            </div>
            <div className="min-w-60 h-full bg-green-100 mx-2">
              <img className="h-full w-full object-cover" src="/box.jpg" alt="rice box" />
            </div>
            <div className="min-w-60 h-full bg-green-100 mx-2">
              <img className="h-full w-full object-cover" src="/box.jpg" alt="rice box" />
            </div>
          </div>
      </div>

      <div className="h-[350px] w-[80%] bg-red-100 flex flex-col my-4 items-center">
          <p className="h-[20%] text-center bg-blue-100 w-full">Testimonials</p>
          <div className="h-[80%] w-full flex flex-col items-center ">
            <p>theyre great</p>
          </div>
      </div>

      <iframe className="rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.0972439901343!2d0.1191343!3d52.2052803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8718ca20d3c21%3A0xb9a5c7a21a51e70!2sVegan%20Bites!5e0!3m2!1sen!2suk!4v1687821276327!5m2!1sen!2suk" width="800" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <Footer />
    </main>
  );
}
